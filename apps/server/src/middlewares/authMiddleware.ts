import type { Context, Next } from 'hono'

import { getCookie } from 'hono/cookie'
import { createMiddleware } from 'hono/factory'

import type { AppType } from '@/utils/types/utils'

import { PUBLIC_ROUTES } from '@/utils/constants/global'
import { prisma } from '@/utils/prisma'

export const authMiddleware = createMiddleware(async (ctx: Context<AppType>, next: Next) => {
	for (const route of PUBLIC_ROUTES) {
		if (ctx.req.path.replace('/api', '').startsWith(route)) {
			await next()
		}
	}

	const sessionCookie = getCookie(ctx, 'session')

	if (!sessionCookie) {
		return ctx.json({ msg: 'Не авторизован' }, 401)
	}

	const session = await prisma.session.findUnique({
		where: { id: sessionCookie },
	})

	if (!session) {
		return ctx.json({ msg: 'Не авторизован' }, 401)
	}

	const user = await prisma.user.findUnique({
		where: { id: session.userId },
	})

	if (!user) {
		return ctx.json({ msg: 'Не верная сессия' }, 401)
	}

	ctx.set('session', session)
	ctx.set('user', user)

	await next()
})
