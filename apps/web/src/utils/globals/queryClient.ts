import type { HTTPError } from 'ky'

import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export const queryClient = new QueryClient({
	defaultOptions: { queries: { refetchOnWindowFocus: false } },
	queryCache: new QueryCache({
		onError: async (cause) => {
			const { response } = cause as HTTPError
			const error = await response.json<{ msg: string }>()
			toast.error(error.msg ?? 'Ошибка')
		},
	}),
	mutationCache: new MutationCache({
		onError: async (cause) => {
			const { response } = cause as HTTPError
			const error = await response.json<{ msg: string }>()
			toast.error(error.msg ?? 'Ошибка')
		},
	}),
})
