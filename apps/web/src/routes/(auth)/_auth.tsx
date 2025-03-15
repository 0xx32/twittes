import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

interface AuthSearch {
	redirect: string
}

export const Route = createFileRoute('/(auth)/_auth')({
	component: RouteComponent,
	validateSearch: (search: Record<string, unknown>): AuthSearch => ({
		redirect: search.redirect as string,
	}),
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
