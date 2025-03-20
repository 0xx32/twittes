import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { Loader2 } from 'lucide-react'

import { Sidebar } from '../-components'

export const Route = createFileRoute('/(base)/_base')({
	component: LayoutComponent,
	beforeLoad: async ({ context }) => {
		if (!context.isAuthenticated) {
			throw redirect({
				to: '/login',
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
			<div className="border border-gray-200 rounded-board bg-dashboard px-8 pt-6 shadow-xl dark:border-gray-900 dark:shadow-md dark:shadow-white/20">
				<div className="grid grid-cols-[240px_1fr_270px] mx-auto max-w-[1400px] gap-10">
					<Sidebar />
					<main>
						<Outlet />
					</main>

					<div>
						<div className="sticky top-5">
							<div className="mb-6 h-[300px] rounded-2xl bg-board"></div>
							<div className="h-[300px] rounded-2xl bg-board"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
