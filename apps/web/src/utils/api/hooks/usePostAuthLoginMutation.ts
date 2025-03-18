import { useMutation } from '@tanstack/react-query'

import type { PostAuthLoginRequestConfig } from '../requests'

import { MUTATION_KEYS } from '../constants'
import { postAuthLogin } from '../requests'

export const usePostAuthLoginMutation = (
	settings?: MutationSettings<PostAuthLoginRequestConfig, typeof postAuthLogin>
) =>
	useMutation({
		mutationKey: [MUTATION_KEYS.POST_LOGIN],
		mutationFn: ({ params, config }) =>
			postAuthLogin({ params, config: { ...config, ...settings?.config } }),
		...settings?.options,
	})
