import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/_auth')({
	component: RouteComponent,
	beforeLoad: ({ context }) => {
		if (context.isAuthenticated) {
			throw redirect({
				to: '/',
			})
		}
	},
})

function RouteComponent() {
	return (
		<div>
			<Outlet />
		</div>
	)
}
