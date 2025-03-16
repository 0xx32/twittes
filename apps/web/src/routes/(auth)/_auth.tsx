import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/_auth')({
	component: RouteComponent,
	beforeLoad: ({ context, location }) => {
		if (context.isAuthenticated) {
			throw redirect({
				to: location.href,
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
