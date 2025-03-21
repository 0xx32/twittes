import { useMutation } from '@tanstack/react-query'

import type { PostAuthRegisterRequestConfig } from '../../requests'

import { MUTATION_KEYS } from '../../constants'
import { postAuthRegister } from '../../requests'

export const usePostAuthRegisterMutation = (
	settings?: MutationSettings<PostAuthRegisterRequestConfig, typeof postAuthRegister>
) =>
	useMutation({
		mutationKey: [MUTATION_KEYS.POST_AUTH_REGISTER],
		mutationFn: ({ params, config }) =>
			postAuthRegister({ params, config: { ...config, ...settings?.config } }),
		...settings?.options,
	})
