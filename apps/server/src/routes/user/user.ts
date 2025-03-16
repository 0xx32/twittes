import { Hono } from 'hono'

import { prisma } from '@/utils/prisma'

import { getUserSpecs } from './user.openapi'

export const userRoute = new Hono()

userRoute.get('/:username', getUserSpecs, async (ctx) => {
	const username = ctx.req.param('username')

	const user = await prisma.user.findUnique({
		where: { username },
		omit: { password: true },
	})

	if (!user) {
		return ctx.json({ message: 'Пользователь не найден' }, 404)
	}

	return ctx.json(user)
})
