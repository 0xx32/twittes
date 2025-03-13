import { useMutation } from '@tanstack/react-query'

import { MUTATION_KEYS } from '@/utils/constants'

import type { PostRegisterRequestConfig } from '../requests'

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
