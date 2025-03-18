import * as v from 'valibot'

export const uploadSearchSchema = v.object({
	path: v.optional(v.string()),
	name: v.string(),
})

export const uploadResponseSchema = v.object({
	message: v.string(),
	filePath: v.string(),
})
