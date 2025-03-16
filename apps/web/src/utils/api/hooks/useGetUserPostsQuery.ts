import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/utils/constants'

import type { GetUserPostsParams } from '../requests'

import { getUserPosts } from '../requests'

export const useGetUserTwittesQuery = (
	params: GetUserPostsParams,
	settings?: QuerySettings<typeof getUserPosts>
) =>
	useQuery({
		queryKey: [QUERY_KEYS.GET_USER_POSTS, params.username],
		queryFn: () => getUserPosts({ params, config: settings?.config }),
		...settings?.options,
	})
