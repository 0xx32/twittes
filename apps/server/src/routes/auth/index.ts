import * as argon2 from 'argon2'
import { Hono } from 'hono'
import { describeRoute } from 'hono-openapi'
import { resolver, validator as vValidator } from 'hono-openapi/valibot'
import { deleteCookie, getCookie, setCookie } from 'hono/cookie'

import type { AppType } from '@/utils/types/utils'

import { generateSecureToken } from '@/utils/helpers'
import { prisma } from '@/utils/prisma'

import { loginSchema, registerSchema, responseSchema } from './auth.constants'

export const authRoute = new Hono<AppType>()

authRoute.post(
	'/register',
	describeRoute({
		description: 'Регистраци пользователя',
		responses: {
			200: {
				description: 'Успешно создан аккаунт',
				content: {
					'aplication/json': { schema: resolver(responseSchema) },
				},
			},
			404: {
				description: 'Неверный логин или пароль',
				content: {
					'aplication/json': { schema: resolver(responseSchema) },
				},
			},
			500: {
				description: 'Ошибка сервера',
				content: {
					'aplication/json': { schema: resolver(responseSchema) },
				},
			},
		},
	}),
	vValidator('json', registerSchema, (result, ctx) => {
		if (!result.success) {
			return ctx.json({ msg: 'Неверный логин или пароль', error: result.issues }, 404)
		}
	}),
	async (ctx) => {
		const { username, password } = ctx.req.valid('json')

		const accountIsExist = await prisma.user.findFirst({
			where: { username },
		})

		if (accountIsExist) {
			return ctx.json({ msg: 'Аккаунт с таким логином уже существует' }, 404)
		}

		try {
			const hashPassword = await argon2.hash(password)

			const user = await prisma.user.create({
				data: { username, password: hashPassword, displayName: username },
			})

			return ctx.json({
				message: 'Аккаунт успешно создан',
				userId: user.id,
			})
		} catch (error) {
			console.error(error)
			return ctx.json({ msg: 'Ошибка создания аккаунта' }, 500)
		}
	}
)

authRoute.post(
	'/login',
	describeRoute({
		description: 'Аутентификация пользователя',
		responses: {
			200: {
				description: 'Успешно авторизован',
				content: {
					'aplication/json': { schema: resolver(responseSchema) },
				},
			},
			404: {
				description: 'Пользовтель не найден',
				content: {
					'aplication/json': { schema: resolver(responseSchema) },
				},
			},
			401: {
				description: 'Неверный логин или пароль',
				content: {
					'aplication/json': { schema: resolver(responseSchema) },
				},
			},
		},
	}),
	vValidator('json', loginSchema, (result, ctx) => {
		if (!result.success) {
			return ctx.json({ msg: 'Неверный логин или пароль', error: result.issues }, 401)
		}
	}),
	async (ctx) => {
		const { username, password } = ctx.req.valid('json')

		const user = await prisma.user.findUnique({
			where: { username },
		})

		if (!user) {
			return ctx.json({ msg: 'Аккаунт с таким username не найден' }, 404)
		}

		try {
			const passwordVerify = await argon2.verify(user.password, password)

			if (!passwordVerify) {
				return ctx.json({ msg: 'Неверный логин или пароль' }, 401)
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

			return ctx.json({
				token: newSession.token,
				user,
				msg: 'Аккаунт успешно авторизован',
			})
		} catch (error) {
			console.error(error)
			return ctx.json({ msg: 'Ошибка авторизации' }, 401)
		}
	}
)

authRoute.get(
	'/logout',
	describeRoute({
		description: 'Выход из системы',
		responses: {
			200: {
				description: 'Вы вышли из системы',
				content: {
					'aplication/json': { schema: resolver(responseSchema) },
				},
			},
			401: {
				description: 'Вы не авторизованы',
				content: {
					'aplication/json': { schema: resolver(responseSchema) },
				},
			},
		},
	}),
	async (ctx) => {
		const sessionId = getCookie(ctx, 'session')

		if (!sessionId) {
			return ctx.json({ message: 'Вы не авторизованы' }, 401)
		}

		await prisma.session.delete({
			where: {
				id: sessionId,
			},
		})

		deleteCookie(ctx, 'session')

		return ctx.json({ message: 'Вы вышли из системы' })
	}
)
