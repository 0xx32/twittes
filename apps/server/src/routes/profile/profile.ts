import { Hono } from 'hono'

import type { AppType } from '@/utils/types/utils'

import { profileSpecs } from './profile.specs'

export const profileRoute = new Hono<AppType>()

profileRoute.get('/', profileSpecs, async (ctx) => {
	const user = ctx.get('user')

	const { password, ...returnUser } = user

	return ctx.json({ profile: returnUser })
})
