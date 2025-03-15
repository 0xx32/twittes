import { apiReference } from '@scalar/hono-api-reference'
import { Hono } from 'hono'
import { openAPISpecs } from 'hono-openapi'
import { cors } from 'hono/cors'
import { showRoutes } from 'hono/dev'

import * as routes from '@/routes'

import { OPENAPI_SPECS } from './utils/constants/openapi'

const app = new Hono().basePath('/api')

app.use(
	'*',
	cors({
		origin: 'http://localhost:5173',
		credentials: true,
	})
)

app.route('auth', routes.authRoute)
app.route('profile', routes.profileRoute)
app.route('user', routes.userRoute)
app.route('twitt', routes.twittRoute)

app.get('/openapi', openAPISpecs(app, OPENAPI_SPECS))
app.get(
	'/docs',
	apiReference({
		theme: 'saturn',
		spec: { url: '/api/openapi' },
	})
)

showRoutes(app, {
	verbose: true,
})
export default {
	port: Bun.env.BACKEND_PORT ?? 3000,
	fetch: app.fetch,
}
