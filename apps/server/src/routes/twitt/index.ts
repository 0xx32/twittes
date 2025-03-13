import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'

import { authMiddleware } from '@/middlewares'
import { prisma } from '@/utils/prisma'

import { twittSchema } from './twitts.constants'

interface Variables {
	accountId: string
}

export const twittRoute = new Hono<{ Variables: Variables }>()

twittRoute.post(
	'/',
	authMiddleware,
	zValidator('json', twittSchema, (result, ctx) => {
		if (!result.success) {
			return ctx.json({ msg: 'Твит не создан', error: result.error.errors }, 400)
		}
	}),
	async (ctx) => {
		const accountId = ctx.get('accountId')

		const account = await prisma.account.findUnique({
			where: {
				id: accountId,
			},
		})

		if (!account) {
			return ctx.json({ msg: 'Аккаунт не найден' }, 404)
		}

		const twittDto = ctx.req.valid('json')

		const twitt = await prisma.twitt.create({
			data: {
				userId: account.userId,
				...twittDto,
			},
		})

		return ctx.json(twitt, 201)
	}
)
