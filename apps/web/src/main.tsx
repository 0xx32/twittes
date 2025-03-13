import { createRouter, RouterProvider } from '@tanstack/react-router'
import { createRoot } from 'react-dom/client'

import { routeTree } from '../generated/router'

import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'
import '@/assets/styles/global.css'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)
