import { Hono } from 'hono'
import { describeRoute } from 'hono-openapi'
import { resolver } from 'hono-openapi/valibot'
import { deleteCookie, getCookie } from 'hono/cookie'

import { prisma } from '@/utils/prisma'

import { errorResponseSchema, successResponseSchema } from './profile.constants'

export const profileRoute = new Hono()

profileRoute.get(
	'/',
	describeRoute({
		description: 'Получение профиля',
		responses: {
			200: {
				description: 'Успешно получен профиль',
				content: {
					'aplication/json': { schema: resolver(successResponseSchema) },
				},
			},
			401: {
				description: 'Вы не авторизованы',
				content: {
					'aplication/json': { schema: resolver(errorResponseSchema) },
				},
			},
		},
	}),
	async (ctx) => {
		const sessionCookie = getCookie(ctx, 'session')

		if (!sessionCookie) {
			return ctx.json({ msg: 'Не авторизован' }, 401)
		}

		const session = await prisma.session.findUnique({ where: { id: sessionCookie } })

		if (!session) {
			deleteCookie(ctx, 'session')
			return ctx.json({ msg: 'Сессия не найдена' }, 401)
		}

		const user = await prisma.user.findUnique({
			where: { id: session?.userId },
			omit: { password: true },
		})

		return ctx.json({ profile: user })
	}
)
