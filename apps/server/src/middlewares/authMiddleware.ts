import type { Context, Next } from 'hono'

import { getCookie } from 'hono/cookie'
import { createMiddleware } from 'hono/factory'

import { prisma } from '@/utils/prisma'

export const authMiddleware = createMiddleware(async (ctx: Context, next: Next) => {
	const sessionId = getCookie(ctx, 'session')

	if (!sessionId) {
		return ctx.json({ msg: 'Не авторизован' }, 401)
	}

	const session = await prisma.session.findUnique({
		where: {
			id: sessionId,
		},
		select: {
			accountId: true,
		},
	})

	if (!session) {
		return ctx.json({ msg: 'Не авторизован' }, 401)
	}

	ctx.set('sessionId', sessionId)
	ctx.set('accountId', session.accountId)
	await next()
})
