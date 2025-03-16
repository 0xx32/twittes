import * as argon2 from 'argon2'
import { Hono } from 'hono'
import { deleteCookie, getCookie, setCookie } from 'hono/cookie'

import type { AppType } from '@/utils/types/utils'

import { generateSecureToken } from '@/utils/helpers'
import { prisma } from '@/utils/prisma'

import { loginSpecs, logoutSpecs, registerSpecs } from './auth.openapi'
import { loginJsonValidation, registerJsonValidation } from './auth.validations'

export const authRoute = new Hono<AppType>()

authRoute.post('/register', registerSpecs, registerJsonValidation, async (ctx) => {
	const { username, password } = ctx.req.valid('json')

	const accountIsExist = await prisma.user.findUnique({
		where: { username },
	})

	if (accountIsExist) {
		return ctx.json({ message: 'Аккаунт с таким логином уже существует' }, 400)
	}

	try {
		const hashPassword = await argon2.hash(password)

		const user = await prisma.user.create({
			data: { username, password: hashPassword, displayName: username },
		})

		return ctx.json(
			{
				message: 'Аккаунт создан',
				userId: user.id,
			},
			201
		)
	} catch (error) {
		console.error(error)
		return ctx.json({ message: 'Ошибка создания аккаунта' }, 500)
	}
})

authRoute.post('/login', loginSpecs, loginJsonValidation, async (ctx) => {
	const loginDto = ctx.req.valid('json')

	const user = await prisma.user.findUnique({
		where: { username: loginDto.username },
	})

	if (!user) {
		return ctx.json({ message: 'Не верный username или пароль' }, 400)
	}

	try {
		const passwordVerify = await argon2.verify(user.password, loginDto.password)

		if (!passwordVerify) {
			return ctx.json({ message: 'Неверный логин или пароль' }, 400)
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
			expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
		})

		const { password, ...returnUser } = user

		return ctx.json({
			token: newSession.token,
			user: returnUser,
			message: 'Аккаунт успешно авторизован',
		})
	} catch (error) {
		console.error(error)
		return ctx.json({ message: 'Ошибка авторизации' }, 401)
	}
})

authRoute.get('/logout', logoutSpecs, async (ctx) => {
	const sessionId = getCookie(ctx, 'session')

	if (!sessionId) {
		return ctx.json({ message: 'Вы не авторизованы' }, 401)
	}

	try {
		await prisma.session.delete({
			where: {
				id: sessionId,
			},
		})

		deleteCookie(ctx, 'session')
		return ctx.json({ message: 'Вы вышли из системы' })
	} catch (error) {
		console.error(error)
		return ctx.json({ message: 'Вы вышли из системы' })
	} finally {
		deleteCookie(ctx, 'session')
	}
})
