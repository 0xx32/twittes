import { useInfiniteQuery } from '@tanstack/react-query'

import type { GetUserPostsParams } from '../requests'

import { QUERY_KEYS } from '../constants'
import { getUserPosts } from '../requests'

interface Params extends GetUserPostsParams {
	offset: number
	limit: number
}

export const useGetUserPostsInfinityQuery = (
	params: Params,
	settings?: InfinityQuerySettings<typeof getUserPosts>
) =>
	useInfiniteQuery({
		initialPageParam: 0,
		queryKey: [QUERY_KEYS.GET_USER_POSTS, ...Object.values(params)],
		queryFn: ({ pageParam }) =>
			getUserPosts({
				params,
				config: {
					...settings?.config,
					searchParams: {
						limit: params.limit,
						offset: params.offset + pageParam * params.limit,
					},
				},
			}),

		getNextPageParam: (lastPage, allPages) => {
			if (lastPage && lastPage.posts.length < params.limit) return undefined
			return allPages.length
		},
	})
