import type { QueryClient } from '@tanstack/react-query'

import { createRouter as createTanstackRouter } from '@tanstack/react-router'

import { routeTree } from '@/routeTree.gen'

import { queryClient } from './queryClient'

export interface RouterContext {
	queryClient: QueryClient
	isAuthenticated: boolean
}

export const router = createTanstackRouter({
	routeTree,
	context: { queryClient, isAuthenticated: false },
})

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}
