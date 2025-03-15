import { createFileRoute } from '@tanstack/react-router'

import { MainPage } from '@/pages/main/page'

export const Route = createFileRoute('/(base)/_base/')({
	component: MainPage,
})
