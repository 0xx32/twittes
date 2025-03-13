import { zValidator } from '@hono/zod-validator'
import * as argon2 from 'argon2'
import { Hono } from 'hono'
import { deleteCookie, getCookie, setCookie } from 'hono/cookie'

import type { AppType } from '@/utils/types/utils'

import { generateSecureToken } from '@/utils/helpers'
import { prisma } from '@/utils/prisma'

import { authSchema } from './auth.constants'

export const authRoute = new Hono<AppType>()

authRoute.post(
	'/register',
	zValidator('json', authSchema, (result, ctx) => {
		if (!result.success) {
			return ctx.json({ msg: 'Неверный логин или пароль', error: result.error.errors }, 400)
		}
	}),
	async (ctx) => {
		const { username, password } = ctx.req.valid('json')

		const accountIsExist = await prisma.user.findFirst({
			where: { username },
		})

		if (accountIsExist) {
			return ctx.json({ msg: 'Аккаунт с таким логином уже существует' }, 400)
		}

		try {
			const hashPassword = await argon2.hash(password)

			const user = await prisma.user.create({
				data: { username, password: hashPassword, displayName: username },
			})

			return ctx.json({
				message: 'Аккаунт успешно создан',
				accountId: user.id,
			})
		} catch (error) {
			console.error(error)
			return ctx.json({ msg: 'Ошибка создания аккаунта' }, 400)
		}
	}
)

authRoute.post(
	'/login',
	zValidator('json', authSchema, (result, ctx) => {
		if (!result.success) {
			return ctx.json({ msg: 'Неверный логин или пароль', error: result.error.errors }, 400)
		}
	}),
	async (ctx) => {
		const { username, password } = ctx.req.valid('json')

		const user = await prisma.user.findUnique({
			where: { username },
		})

		if (!user) {
			return ctx.json({ msg: 'Аккаунт с таким username не найден' }, 400)
		}

		try {
			const passwordVerify = await argon2.verify(user.password, password)

			if (!passwordVerify) {
				return ctx.json({ msg: 'Неверный логин или пароль' }, 400)
			}

			const newSession = await prisma.session.create({
				data: {
					userId: user.id,
					expires: new Date(Date.now() + 1000 * 60 * 15),
					token: generateSecureToken(32),
				},
			})

			setCookie(ctx, 'session', newSession.id, {
				httpOnly: true,
				expires: new Date(Date.now() + 1000 * 60 * 15),
			})

			return ctx.json({
				message: 'Аккаунт успешно авторизован',
			})
		} catch (error) {
			console.error(error)
			return ctx.json({ msg: 'Ошибка авторизации' }, 400)
		}
	}
)

authRoute.get('/logout', async (ctx) => {
	const sessionId = getCookie(ctx, 'session')

	if (!sessionId) {
		return ctx.json({ message: 'Вы не авторизованы' }, 400)
	}

	await prisma.session.delete({
		where: {
			id: sessionId,
		},
	})

	deleteCookie(ctx, 'session-id')

	return ctx.json({ message: 'Вы вышли из системы' })
})
