import * as v from 'valibot'

import { userSchema } from '@/utils/constants/shemas'

export const getProfileResponseSchema = v.object({
	profile: userSchema,
})
