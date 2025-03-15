import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'

import type { RouterContext } from '@/utils/globals/router'

import { Toaster } from '@/components/ui'

const Root = () => (
	<>
		<Outlet />
		<Toaster richColors />
	</>
)

export const Route = createRootRouteWithContext<RouterContext>()({
	component: Root,
})
