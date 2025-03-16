import { validator as vValidator } from 'hono-openapi/valibot'

import { loginSchema, registerSchema } from './auth.constants'

export const registerJsonValidation = vValidator('json', registerSchema, (result, ctx) => {
	if (!result.success) {
		return ctx.json(
			{ message: 'Ошибка регистрации', errors: result.issues.map((issue) => issue.message) },
			400
		)
	}
})
export const loginJsonValidation = vValidator('json', loginSchema, (result, ctx) => {
	if (!result.success) {
		return ctx.json(
			{ message: 'Ошибка аунтентификации', errors: result.issues.map((issue) => issue.message) },
			400
		)
	}
})
