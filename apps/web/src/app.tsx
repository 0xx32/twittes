import type { QueryClient } from '@tanstack/react-query'

import { RouterProvider } from '@tanstack/react-router'

import { useSession } from './utils/contexts/session'
import { router } from './utils/globals/router'

interface AppProps {
	queryClient: QueryClient
}

export const App = ({ queryClient }: AppProps) => {
	const { session } = useSession()

	return <RouterProvider router={router} context={{ isAuthenticated: session, queryClient }} />
}
