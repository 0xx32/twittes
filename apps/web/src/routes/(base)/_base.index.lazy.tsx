import { createLazyFileRoute } from '@tanstack/react-router'

import { MainPage } from '@/pages/main/page'

export const Route = createLazyFileRoute('/(base)/_base/')({
	component: MainPage,
})
