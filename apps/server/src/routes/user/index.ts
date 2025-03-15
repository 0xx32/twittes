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
