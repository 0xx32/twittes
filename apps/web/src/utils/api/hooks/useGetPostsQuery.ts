import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '../constants'
import { getPosts } from '../requests'

export const useGetPostsQuery = (settings?: QuerySettings<typeof getPosts>) =>
	useQuery({
		queryKey: [QUERY_KEYS.GET_POSTS],
		queryFn: () => getPosts({ config: settings?.config }),
		...settings?.options,
	})
