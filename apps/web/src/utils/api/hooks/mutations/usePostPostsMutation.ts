import { useMutation } from '@tanstack/react-query'

import type { PostPostsRequestConfig } from '../../requests'

import { MUTATION_KEYS } from '../../constants'
import { postPosts } from '../../requests'

export const usePostPostsMutation = (
	settings?: MutationSettings<PostPostsRequestConfig, typeof postPosts>
) =>
	useMutation({
		mutationKey: [MUTATION_KEYS.POST_POSTS],
		mutationFn: ({ params, config }) =>
			postPosts({ params, config: { ...config, ...settings?.config } }),
		...settings?.options,
	})
