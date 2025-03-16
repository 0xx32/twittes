import * as v from 'valibot'

export const loginSchema = v.object({
	username: v.pipe(v.string(), v.minLength(3), v.maxLength(20)),
	password: v.pipe(v.string(), v.minLength(3), v.maxLength(20)),
})

export const registerSchema = v.object({
	username: v.pipe(v.string(), v.minLength(3), v.maxLength(20)),
	password: v.pipe(v.string(), v.minLength(3), v.maxLength(20)),
	displayName: v.optional(v.string()),
})

export const registerResponseSchema = v.object({
	userId: v.string(),
	message: v.string(),
})
export const loginResponseSchema = v.object({
	token: v.string(),
	user: v.object({
		id: v.string(),
		username: v.string(),
		displayName: v.string(),
	}),
	message: v.string(),
})

export const authErrorResponseSchema = v.object({
	message: v.string(),
	errors: v.array(v.string()),
})
