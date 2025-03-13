import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(base)/_base')({
	component: LayoutComponent,
})

function LayoutComponent() {
	return (
		<div className="min-h-full flex items-center justify-center bg-blue-200 py-3">
			<Outlet />
		</div>
	)
}
