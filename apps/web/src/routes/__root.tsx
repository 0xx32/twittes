import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'

import type { RouterContext } from '@/utils/globals/router'

import { Toaster } from '@/components/ui'

const Root = () => (
	<>
		<Outlet />
		<Toaster richColors />
		<ReactQueryDevtools initialIsOpen={false} />
	</>
)

export const Route = createRootRouteWithContext<RouterContext>()({
	component: Root,
})
