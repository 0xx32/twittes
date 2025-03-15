import { vValidator } from '@hono/valibot-validator'

import { createPostSchema } from './post.constants'

export const createPostJsonValidator = vValidator('json', createPostSchema, (result, ctx) => {
	if (!result.success) {
		return ctx.json({ message: 'Не верное поля', error: result.issues }, 400)
	}
})
