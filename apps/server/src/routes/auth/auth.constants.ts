import { z } from 'zod'

export const authSchema = z.object({
	username: z.string().min(3).max(20).trim(),
	password: z.string().min(3).max(20).trim(),
})
