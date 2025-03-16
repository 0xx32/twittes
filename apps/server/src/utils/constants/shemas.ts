import * as v from 'valibot'

export const paginationSearchQuerySchema = v.object({
	size: v.optional(v.number()),
	page: v.optional(v.number()),
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
