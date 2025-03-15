import type { OpenApiSpecsOptions } from 'hono-openapi'

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
