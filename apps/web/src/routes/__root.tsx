import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRootRoute, Outlet } from '@tanstack/react-router'

import { ThemeProvider } from '@/components/providers'
import { Toaster } from '@/components/ui'

const queryClient = new QueryClient()

export const Route = createRootRoute({
	component: () => (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<Outlet />
				<Toaster richColors />
			</ThemeProvider>
		</QueryClientProvider>
	),
})
