import { useInfiniteQuery } from '@tanstack/react-query'

import type { GetUserPostsParams } from '../requests'

import { getUserPosts } from '../requests'

export const useGetUserPostsInfinityQuery = (
	params: GetUserPostsParams,
	settings?: InfinityQuerySettings<typeof getUserPosts>
) =>
	useInfiniteQuery({
		initialPageParam: 0,
		queryKey: ['getUserPost', ...Object.values(params)],
		queryFn: ({ pageParam }) =>
			getUserPosts({
				params: {
					...params,
					offset: params.offset + (pageParam as number) * params.size,
					size: params.size,
				},
				config: settings?.config,
			}),

		getNextPageParam: (lastPage, allPages) => {
			if (lastPage && lastPage.posts.length < params.size) return undefined
			return allPages.length
		},
	})
