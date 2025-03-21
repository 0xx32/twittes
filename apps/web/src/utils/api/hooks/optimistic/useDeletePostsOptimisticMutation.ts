import type { InfiniteData } from '@tanstack/react-query'

import { useQueryClient } from '@tanstack/react-query'

import type { deletePosts, DeletePostsParams, DeletePostsRequestConfig } from '../../requests'

import { QUERY_KEYS } from '../../constants'
import { useDeletePostsMutation } from '../useDeletePostsMutation'

export const useDeletePostsOptimisticMutation = (
	params: DeletePostsParams,
	settings?: MutationSettings<DeletePostsRequestConfig, typeof deletePosts>
) => {
	const queryClient = useQueryClient()

	return useDeletePostsMutation(params, {
		options: {
			...settings?.options,
			async onMutate() {
				await queryClient.cancelQueries({ queryKey: [QUERY_KEYS.GET_POSTS] })
				queryClient.setQueryData<InfiniteData<GetPostsResponse>>(
					[QUERY_KEYS.GET_POSTS],
					(oldData) => {
						if (!oldData) return oldData
						const newData = oldData.pages.map((page) => ({
							...page,
							posts: page.posts.filter((post) => post.id !== params.postId),
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
