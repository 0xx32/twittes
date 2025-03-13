import { z } from 'zod'

export const twittSchema = z.object({
	title: z.string(),
	content: z.string(),
	image: z.string().optional(),
})
