import { createLazyFileRoute } from '@tanstack/react-router'

import { UserPage } from '@/pages/profile/page'

export const Route = createLazyFileRoute('/(base)/_base/$username/')({
	component: UserPage,
})
