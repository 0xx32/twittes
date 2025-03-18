import { useGetPostsInfiniteQuery } from '@/utils/api/hooks'

const PAGINATION = {
	OFFSET: 0,
	LIMIT: 10,
}

export const useFeed = () => {
	const getPostsInfinityQuery = useGetPostsInfiniteQuery({
		limit: PAGINATION.LIMIT,
		offset: PAGINATION.OFFSET,
	})

	const posts = getPostsInfinityQuery.data?.pages.flatMap((page) => page.posts)

	return {
		state: {
			posts,
			isFetching: getPostsInfinityQuery.isFetching,
			isLoading: getPostsInfinityQuery.isLoading,
			isLoadMore: getPostsInfinityQuery.isFetchingNextPage,
			isRefreshing: getPostsInfinityQuery.isRefetching,
		},
		queries: {
			getPostsInfinityQuery,
		},
	}
}
