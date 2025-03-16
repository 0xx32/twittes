import * as v from 'valibot'

export const getProfileResponseSchema = v.object({
	profile: v.object({
		id: v.string(),
		email: v.string(),
		username: v.string(),
		displayName: v.string(),
		picture: v.string(),
		isVerified: v.boolean(),
		createdAt: v.string(),
		updatedAt: v.string(),
	}),
})
