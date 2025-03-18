import { useInfiniteQuery } from '@tanstack/react-query'

import type { GetPostsUserParams } from '../requests'

import { QUERY_KEYS } from '../constants'
import { getPostsUser } from '../requests'

interface Params extends GetPostsUserParams {
	offset: number
	limit: number
}

export const useGetPostsUserInfinityQuery = (
	params: Params,
	settings?: InfinityQuerySettings<typeof getPostsUser>
) =>
	useInfiniteQuery({
		initialPageParam: 0,
		queryKey: [QUERY_KEYS.GET_POSTS_USER, ...Object.values(params)],
		queryFn: ({ pageParam }) =>
			getPostsUser({
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
