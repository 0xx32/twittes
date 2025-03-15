import { useMutation } from '@tanstack/react-query'

import { MUTATION_KEYS } from '@/utils/constants'

import type { PostLoginRequestConfig } from '../requests'

import { postLogin } from '../requests'

export const usePostLoginMutation = (
	settings?: MutationSettings<PostLoginRequestConfig, typeof postLogin>
) =>
	useMutation({
		mutationKey: [MUTATION_KEYS.POST_LOGIN],
		mutationFn: ({ params, config }) =>
			postLogin({ params, config: { ...config, ...settings?.config } }),
		...settings?.options,
	})
