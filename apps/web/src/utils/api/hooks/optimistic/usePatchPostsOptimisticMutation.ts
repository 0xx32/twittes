import type { InfiniteData } from '@tanstack/react-query'

import { useQueryClient } from '@tanstack/react-query'

import type { patchPosts, PatchPostsParams, PatchPostsRequestConfig } from '../../requests'

import { QUERY_KEYS } from '../../constants'
import { usePatchPostsMutation } from '../mutations'

export const usePatchPostsOptimisticMutation = (
	params: Pick<PatchPostsParams, 'postId'>,
	settings?: MutationSettings<PatchPostsRequestConfig, typeof patchPosts>
) => {
	const queryClient = useQueryClient()

	return usePatchPostsMutation(params, {
		options: {
			...settings?.options,
			async onMutate({ params }) {
				await queryClient.cancelQueries({ queryKey: [QUERY_KEYS.GET_POSTS] })
				queryClient.setQueryData<InfiniteData<GetPostsResponse>>(
					[QUERY_KEYS.GET_POSTS],
					(oldData) => {
						if (!oldData) return oldData
						const newData = oldData.pages.map((page) => ({
							...page,
							posts: page.posts.map((post) =>
								post.id === params.postId ? { ...post, ...params } : post
							),
						}))
						return {
							...oldData,
							pages: newData,
						}
					}
				)
			},
			onError(previousInfiniteQueryData) {
				queryClient.setQueryData([QUERY_KEYS.GET_POSTS], previousInfiniteQueryData)
			},
			onSettled() {
				queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_POSTS] })
			},
		},
	})
}
