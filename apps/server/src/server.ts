import { apiReference } from '@scalar/hono-api-reference'
import { Hono } from 'hono'
import { openAPISpecs } from 'hono-openapi'
import { serveStatic } from 'hono/bun'
import { cors } from 'hono/cors'

import * as routes from '@/routes'

import type { AppType } from './utils/types/utils'

import { authMiddleware } from './middlewares'
import { OPENAPI_SPECS } from './utils/constants/openapi'
import { generateStreamResponseString } from './utils/helpers'

const app = new Hono<AppType>()

app.use('/static/*', serveStatic({ root: './' }))

app.use(
	'*',
	cors({
		origin: 'http://localhost:5173',
		credentials: true,
	})
)
app.use('*', authMiddleware)

app.route('api/auth', routes.authRoute).basePath('/api')
app.route('api/profile', routes.profileRoute)
app.route('api/user', routes.userRoute)
app.route('api/posts', routes.postRoute)

app.get('api/event/notification', (ctx) => {
	ctx.header('Content-Type', 'text/event-stream')
	ctx.header('Cache-Control', 'no-cache')
	ctx.header('Connection', 'keep-alive')

	return ctx.body(generateStreamResponseString('notice', 'my-id', 'Hello World'))
})

app.get('api/openapi', openAPISpecs(app, OPENAPI_SPECS))
app.get(
	'api/docs',
	apiReference({
		theme: 'saturn',
		url: '/api/openapi',
	})
)

export default {
	port: Bun.env.BACKEND_PORT ?? 3000,
	fetch: app.fetch,
}
