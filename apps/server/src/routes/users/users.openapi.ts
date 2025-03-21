import { describeRoute } from 'hono-openapi'
import { resolver } from 'hono-openapi/valibot'

import { errorServerConfig } from '@/utils/constants/openapi'
import { errorResponseSchema, userSchema } from '@/utils/constants/shemas'

export const getUserSpecs = describeRoute({
	description: 'Получение пользователя',
	responses: {
		200: {
			description: 'Успешно',
			content: {
				'aplication/json': { schema: resolver(userSchema) },
			},
		},
		404: {
			description: 'Пользователь не найден',
			content: {
				'aplication/json': { schema: resolver(errorResponseSchema) },
			},
		},
		500: errorServerConfig,
	},
})
