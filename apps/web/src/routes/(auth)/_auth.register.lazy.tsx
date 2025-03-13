import { createLazyFileRoute } from '@tanstack/react-router'

import { RegisterPage } from '@/pages/(auth)/register/page'

export const Route = createLazyFileRoute('/(auth)/_auth/register')({
	component: RegisterPage,
})
