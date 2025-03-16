import * as v from 'valibot'

export const userSchema = v.object({
	id: v.string(),
	username: v.string(),
	displayName: v.string(),
	picture: v.string(),
	age: v.number(),
	city: v.string(),
	country: v.string(),
	isVerified: v.boolean(),
	createdAt: v.string(),
	updatedAt: v.string(),
})
