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

export const responseSchema = v.object({
	msg: v.string(),
})
