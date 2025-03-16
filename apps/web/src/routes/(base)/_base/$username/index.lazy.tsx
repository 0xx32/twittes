import { createLazyFileRoute } from '@tanstack/react-router'

import { ProfilePage } from '@/pages/profile/page'

export const Route = createLazyFileRoute('/(base)/_base/$username/')({
	component: ProfilePage,
})
