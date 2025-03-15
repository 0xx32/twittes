import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/utils/constants'

import type { GetUserTwittesParams } from '../requests'

import { getUserTwittes } from '../requests'

export const useGetUserTwittesQuery = (
	params: GetUserTwittesParams,
	settings?: QuerySettings<typeof getUserTwittes>
) =>
	useQuery({
		queryKey: [QUERY_KEYS.GET_USER_TWITTES, params.username],
		queryFn: () => getUserTwittes({ params, config: settings?.config }),
		...settings?.options,
	})
