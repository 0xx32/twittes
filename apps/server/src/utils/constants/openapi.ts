import type { OpenApiSpecsOptions } from 'hono-openapi'

import { resolver } from 'hono-openapi/valibot'

import { errorServerResponseSchema } from './shemas'

export const OPENAPI_SPECS: OpenApiSpecsOptions = {
	documentation: {
		info: {
			title: 'Twittes API',
			version: '1.0.0',
			description: 'Greeting API',
		},
		servers: [
			{ url: `http://localhost:${Bun.env.BACKEND_PORT ?? 3000}`, description: 'Local Server' },
		],
	},
}

export const errorServerConfig = {
	description: 'Ошибка сервера',
	content: {
		'aplication/json': { schema: resolver(errorServerResponseSchema) },
	},
}
