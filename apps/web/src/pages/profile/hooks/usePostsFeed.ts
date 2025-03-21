import { useDidUpdate, useIntersectionObserver } from '@siberiacancode/reactuse'

import { useGetPostsInfiniteQuery } from '@/utils/api/hooks'

const PAGINATION = {
	OFFSET: 0,
	LIMIT: 6,
} as const

interface UsePostFeedParams {
	username: string
}

export const usePostsFeed = ({ username }: UsePostFeedParams) => {
	const userPostsInfinityQuery = useGetPostsInfiniteQuery({
		user: username,
		limit: PAGINATION.LIMIT,
		offset: PAGINATION.OFFSET,
	})

	const userPosts = userPostsInfinityQuery.data?.pages.flatMap((page) => page.posts) ?? []

	const intersectionObserver = useIntersectionObserver<HTMLDivElement>({
		rootMargin: '200px 0px 0px 0px',
		threshold: 1,
	})

	useDidUpdate(() => {
		if (userPostsInfinityQuery.isFetchingNextPage) return
		userPostsInfinityQuery.fetchNextPage()
	}, [intersectionObserver.inView])

	const onRefreshClick = () => userPostsInfinityQuery.refetch()

	return {
		refs: {
			trigger: intersectionObserver.ref,
		},
		state: {
			isFetching: userPostsInfinityQuery.isFetching,
			isLoading: userPostsInfinityQuery.isLoading,
			isLoadMore: userPostsInfinityQuery.isFetchingNextPage,
			isRefreshing: userPostsInfinityQuery.isRefetching,
			posts: userPosts,
		},
		functions: {
			onRefreshClick,
		},
	}
}
