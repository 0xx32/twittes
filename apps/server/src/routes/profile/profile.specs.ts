import { describeRoute } from 'hono-openapi'
import { resolver } from 'hono-openapi/valibot'

import { errorServerConfig } from '@/utils/constants/openapi'
import { errorResponseSchema } from '@/utils/constants/shemas'

import { getProfileResponseSchema } from './profile.constants'

export const profileSpecs = describeRoute({
	description: 'Получение профиля',
	responses: {
		200: {
			description: 'Успешно',
			content: {
				'aplication/json': { schema: resolver(getProfileResponseSchema) },
			},
		},
		401: {
			description: 'Вы не авторизованы',
			content: {
				'aplication/json': { schema: resolver(errorResponseSchema) },
			},
		},
		500: errorServerConfig,
	},
})
