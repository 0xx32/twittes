import { Hono } from 'hono'

import { prisma } from '@/utils/prisma'

export const userRoute = new Hono()

userRoute.get('/:username', async (ctx) => {
	const username = ctx.req.param('username')

	const user = await prisma.user.findUnique({
		where: { username },
		omit: { password: true },
	})

	if (!user) {
		return ctx.json({ msg: 'Пользователь не найден' }, 404)
	}

	return ctx.json(user)
})

//Получение списка твитов пользователя
userRoute.get('/:username/twittes', async (ctx) => {
	const username = ctx.req.param('username')

	const user = await prisma.user.findUnique({
		where: { username },
	})

	if (!user) {
		return ctx.json({ msg: 'Пользователь не найден' }, 404)
	}

	const twittes = await prisma.twitt.findMany({
		where: { creatorId: user.id },
	})

	if (!twittes) {
		return ctx.json({ msg: 'Твиты не найден' }, 404)
	}

	return ctx.json(twittes)
})

//Получение твита по id
userRoute.get('/:userId/twitt/:twittId', async (ctx) => {
	const { userId, twittId } = ctx.req.param()

	const twitt = await prisma.twitt.findUnique({
		where: {
			id: twittId,
			creatorId: userId,
		},
	})

	if (!twitt) {
		return ctx.json({ msg: 'Твит не найден' }, 404)
	}

	return ctx.json(twitt)
})
