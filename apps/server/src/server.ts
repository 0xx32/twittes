import { Hono } from 'hono'
import { cors } from 'hono/cors'

import * as routes from '@/routes'

const app = new Hono().basePath('/api')

app.use('*', cors())

app.route('auth', routes.authRoute)
app.route('user', routes.userRoute)
app.route('twitt', routes.twittRoute)

export default {
	port: Bun.env.BACKEND_PORT ?? 3000,
	fetch: app.fetch,
}
