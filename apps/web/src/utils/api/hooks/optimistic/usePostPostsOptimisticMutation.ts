import type { InfiniteData } from '@tanstack/react-query'

import { useQueryClient } from '@tanstack/react-query'

import type { postPosts, PostPostsRequestConfig } from '../../requests'

import { QUERY_KEYS } from '../../constants'
import { usePostPostsMutation } from '../mutations'

interface Params {
	profile: Pick<Profile, 'username' | 'displayName' | 'picture'>
}

export const usePostPostsOptimisticMutation = (
	params: Params,
	settings?: MutationSettings<PostPostsRequestConfig, typeof postPosts>
) => {
	const queryClient = useQueryClient()

	return usePostPostsMutation({
		...settings?.config,
		options: {
			...settings?.options,
			onMutate: async ({ params: newPostData }) => {
				await queryClient.cancelQueries({ queryKey: [QUERY_KEYS.GET_POSTS] })

				const previousPosts = queryClient.getQueryData<InfiniteData<GetPostsResponse>>([
					QUERY_KEYS.GET_POSTS,
				])

				const newPost: Post = {
					id: 'wadawd12e123',
					content: newPostData.content,
					image: newPostData.image ?? '',
					createdAt: new Date().toString(),
					updatedAt: new Date().toString(),
					likes: [],
					creator: {
						username: params.profile.username,
						displayName: params.profile.displayName,
						picture: params.profile.picture,
					},
				}
				if (previousPosts) return { previousPosts }

				queryClient.setQueryData<InfiniteData<GetPostsResponse>>(
					[QUERY_KEYS.GET_POSTS],
					(oldData) => {
						if (!oldData) return oldData
						const [firstPage, ...pages] = oldData.pages

						if (!firstPage) return oldData

						return {
							...oldData,
							pages: [
								{
									...firstPage,
									posts: [newPost, ...firstPage.posts],
								},
								...pages,
							],
						}
					}
				)

				return { previousPosts }
			},
			onError: async (_, __, context) => {
				await queryClient.setQueryData([QUERY_KEYS.GET_POSTS], context.previousPosts)
			},
			onSettled: async () => {
				await queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_POSTS] })
			},
		},
	})
}
