import { createFileRoute } from '@tanstack/react-router'
import { HTTPError } from 'ky'

import { getUserQueryOptions } from '@/utils/api/options'

export const Route = createFileRoute('/(base)/_base/$username/')({
	loader: ({ context, params }) =>
		context.queryClient.ensureQueryData(getUserQueryOptions({ params })),
	errorComponent: ({ error }) => {
		if (error instanceof HTTPError) {
			return (
				<div>{error.response.status === 404 ? 'Пользователь не найден' : 'Ошибка сервера'}</div>
			)
		}
	},
	head: () => ({
		meta: [{ title: 'User' }],
	}),
})
