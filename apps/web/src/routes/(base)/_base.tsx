import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { Loader2 } from 'lucide-react'

import { Header, Sidebar } from '../-components'

export const Route = createFileRoute('/(base)/_base')({
	component: LayoutComponent,
	beforeLoad: async ({ context, location }) => {
		if (!context.isAuthenticated) {
			throw redirect({
				to: '/login',
				search: {
					redirect: location.href,
				},
			})
		}
	},
	pendingComponent: () => (
		<div className="h-screen flex items-center justify-center">
			<Loader2 className="animate-spin" size={64} />
		</div>
	),
})

function LayoutComponent() {
	return (
		<div className="container py-10">
			<div className="border border-gray-200 rounded-board bg-dashboard pl-12 pr-18 pt-6 shadow-xl dark:border-gray-900 dark:shadow-md dark:shadow-white/20">
				<div className="mb-5">
					<Header />
				</div>
				<div className="grid grid-cols-[240px_1fr] mx-auto max-w-[1400px]">
					<Sidebar />
					<main>
						<Outlet />
					</main>
				</div>
			</div>
		</div>
	)
}
