import { useMutation } from '@tanstack/react-query'

import type { PatchPostsParams, PatchPostsRequestConfig } from '../../requests'

import { MUTATION_KEYS } from '../../constants'
import { patchPosts } from '../../requests'

export const usePatchPostsMutation = (
	params: Pick<PatchPostsParams, 'postId'>,
	settings?: MutationSettings<PatchPostsRequestConfig, typeof patchPosts>
) =>
	useMutation({
		mutationKey: [MUTATION_KEYS.PATCH_POSTS, params.postId],
		mutationFn: ({ params, config }) =>
			patchPosts({ params, config: { ...config, ...settings?.config } }),
		...settings?.options,
	})
