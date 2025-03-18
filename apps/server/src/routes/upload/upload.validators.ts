import { validator as vValidator } from 'hono-openapi/valibot'

import { uploadSearchSchema } from './upload.constants'

export const uploadSearchValidation = vValidator('query', uploadSearchSchema, (result, ctx) => {
	if (!result.success) {
		return ctx.json(
			{ message: 'Не указан параметр search', errors: result.issues.map((issue) => issue.message) },
			400
		)
	}
})
