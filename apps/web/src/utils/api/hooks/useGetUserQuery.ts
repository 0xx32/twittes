import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/utils/constants'

import type { GetUserParams } from '../requests'

import { getUser } from '../requests'

export const useGetUserQuery = (params: GetUserParams, settings?: QuerySettings<typeof getUser>) =>
	useQuery({
		queryKey: [QUERY_KEYS.GET_USER, params.username],
		queryFn: () => getUser({ params, config: settings?.config }),
		...settings?.options,
	})
