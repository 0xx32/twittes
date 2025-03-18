import { describeRoute } from 'hono-openapi'
import { resolver } from 'hono-openapi/valibot'

import { errorServerConfig } from '@/utils/constants/openapi'
import { errorResponseSchema } from '@/utils/constants/shemas'

import { uploadResponseSchema } from './upload.constants'

export const uploadRouteSpecs = describeRoute({
	description: 'Загрузка файла',
	responses: {
		200: {
			description: 'Успешно',
			content: {
				'aplication/json': { schema: resolver(uploadResponseSchema) },
			},
		},
		400: {
			description: 'Ошибка',
			content: {
				'aplication/json': { schema: resolver(errorResponseSchema) },
			},
		},
		500: errorServerConfig,
	},
})
