import * as v from 'valibot'

export const paginationSearchQuerySchema = v.object({
	offset: v.optional(v.string()),
	limit: v.optional(v.string()),
})

export const errorResponseSchema = v.object({
	message: v.string(),
	errors: v.array(v.string()),
})

export const errorServerResponseSchema = v.object({
	message: v.string(),
})

export const baseResponseSchema = v.object({
	message: v.string(),
})

export const userSchema = v.object({
	id: v.string(),
	username: v.string(),
	displayName: v.string(),
	picture: v.string(),
	age: v.number(),
	city: v.string(),
	country: v.string(),
	isVerified: v.boolean(),
	subscriptions: v.array(v.string()),
	followers: v.array(v.string()),
	createdAt: v.string(),
	updatedAt: v.string(),
})
