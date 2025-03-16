import { useMutation } from '@tanstack/react-query'

import type { PostRegisterRequestConfig } from '../requests'

import { MUTATION_KEYS } from '../constants'
import { postRegister } from '../requests'

export const usePostRegisterMutation = (
	settings?: MutationSettings<PostRegisterRequestConfig, typeof postRegister>
) =>
	useMutation({
		mutationKey: [MUTATION_KEYS.POST_REGISTER],
		mutationFn: ({ params, config }) =>
			postRegister({ params, config: { ...config, ...settings?.config } }),
		...settings?.options,
	})
