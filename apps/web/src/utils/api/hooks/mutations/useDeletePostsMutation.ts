import { useMutation } from '@tanstack/react-query'

import type { DeletePostsParams, DeletePostsRequestConfig } from '../../requests'

import { MUTATION_KEYS } from '../../constants'
import { deletePosts } from '../../requests'

export const useDeletePostsMutation = (
	params: DeletePostsParams,
	settings?: MutationSettings<DeletePostsRequestConfig, typeof deletePosts>
) =>
	useMutation({
		mutationKey: [MUTATION_KEYS.DELETE_POSTS, params.postId],
		mutationFn: ({ params, config }) =>
			deletePosts({ params, config: { ...config, ...settings?.config } }),
		...settings?.options,
	})
