import { validator as vValidator } from 'hono-openapi/valibot'

import { createPostSchema } from './posts.constants'

export const createPostJsonValidator = vValidator('json', createPostSchema, (result, ctx) => {
	if (!result.success) {
		return ctx.json(
			{ message: 'Ошибка создания поста', errors: result.issues.map((issue) => issue.message) },
			400
		)
	}
})
