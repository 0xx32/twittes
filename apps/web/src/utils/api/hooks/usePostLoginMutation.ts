import { useMutation } from '@tanstack/react-query'

import type { PostLoginRequestConfig } from '../requests'

import { MUTATION_KEYS } from '../constants'
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
