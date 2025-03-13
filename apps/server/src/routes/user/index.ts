import { Hono } from 'hono'

import { prisma } from '@/utils/prisma'

export const userRoute = new Hono()

//Получение списка твитов пользователя
userRoute.get('/:userId/twitts', async (ctx) => {
	const userId = ctx.req.param('userId')

	const twitts = await prisma.twitt.findMany({
		where: {
			userId,
		},
	})

	if (!twitts) {
		return ctx.json({ msg: 'Твиты не найден' }, 404)
	}

	return ctx.json(twitts)
})

//Получение твита по id
userRoute.get('/:userId/twitt/:twittId', async (ctx) => {
	const { userId, twittId } = ctx.req.param()

	const twitt = await prisma.twitt.findUnique({
		where: {
			id: twittId,
			userId,
		},
	})

	if (!twitt) {
		return ctx.json({ msg: 'Твит не найден' }, 404)
	}

	return ctx.json(twitt)
})
