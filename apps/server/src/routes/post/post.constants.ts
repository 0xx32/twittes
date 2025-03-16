import * as v from 'valibot'

export const postSelectSchema = {
	creator: {
		select: {
			username: true,
			displayName: true,
			picture: true,
		},
	},
} as const

export const createPostSchema = v.object({
	content: v.pipe(v.string(), v.minLength(3), v.maxLength(1000)),
	image: v.optional(v.string()),
})

export const postResponseSchema = v.object({
	id: v.string(),
	content: v.string(),
	image: v.string(),
	createdAt: v.string(),
	likes: v.array(v.string()),
	updatedAt: v.string(),
	creator: v.object({
		username: v.string(),
		displayName: v.string(),
		picture: v.string(),
	}),
})

export const postsResponseSchema = v.array(postResponseSchema)
