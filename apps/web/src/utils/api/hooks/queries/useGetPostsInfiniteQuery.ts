import { useInfiniteQuery } from '@tanstack/react-query'

import type { GetPostsParams } from '../../requests'

import { QUERY_KEYS } from '../../constants'
import { getPosts } from '../../requests'

export const useGetPostsInfiniteQuery = (
	params: GetPostsParams,
	settings?: InfinityQuerySettings<typeof getPosts>
) =>
	useInfiniteQuery({
		initialPageParam: 0,
		queryKey: [QUERY_KEYS.GET_POSTS],
		queryFn: ({ pageParam }) =>
			getPosts({
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
