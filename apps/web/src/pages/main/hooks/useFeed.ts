import { useDidUpdate, useIntersectionObserver } from '@siberiacancode/reactuse'

import { useGetPostsInfiniteQuery } from '@/utils/api/hooks'

const PAGINATION = {
	OFFSET: 0,
	LIMIT: 6,
}

export const useFeed = () => {
	const getPostsInfinityQuery = useGetPostsInfiniteQuery({
		limit: PAGINATION.LIMIT,
		offset: PAGINATION.OFFSET,
	})

	const posts = getPostsInfinityQuery.data?.pages.flatMap((page) => page.posts)

	const intersectionObserver = useIntersectionObserver<HTMLDivElement>({
		rootMargin: '0px 0px 300px 0px',
		threshold: 0,
	})

	useDidUpdate(() => {
		if (getPostsInfinityQuery.isFetchingNextPage) return
		getPostsInfinityQuery.fetchNextPage()
	}, [intersectionObserver.inView])

	return {
		refs: {
			trigger: intersectionObserver.ref,
		},
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
