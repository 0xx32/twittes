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
