import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(base)/_base/main')({
	component: RouteComponent,
})

function RouteComponent() {
	return <div>Hello "/(base)/_main"!</div>
}
