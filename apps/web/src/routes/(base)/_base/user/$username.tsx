import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(base)/_base/user/$username')({
	component: RouteComponent,
})

function RouteComponent() {
	return <div>Hello "/(base)/_base/user/$user"!</div>
}
