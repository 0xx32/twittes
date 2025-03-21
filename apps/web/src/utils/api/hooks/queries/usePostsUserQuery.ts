import { useQuery } from '@tanstack/react-query'

import type { GetPostsUserParams } from '../../requests'

import { QUERY_KEYS } from '../../constants'
import { getPostsUser } from '../../requests'

export const useGetPostsUserQuery = (
	params: GetPostsUserParams,
	settings?: QuerySettings<typeof getPostsUser>
) =>
	useQuery({
		queryKey: [QUERY_KEYS.GET_POSTS_USER, params.username],
		queryFn: () => getPostsUser({ params, config: settings?.config }),
		...settings?.options,
	})
