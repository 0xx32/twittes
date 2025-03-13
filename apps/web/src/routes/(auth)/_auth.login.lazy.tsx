import { createLazyFileRoute } from '@tanstack/react-router'

import { LoginPage } from '@/pages/(auth)/login/page'

export const Route = createLazyFileRoute('/(auth)/_auth/login')({
	component: LoginPage,
})
