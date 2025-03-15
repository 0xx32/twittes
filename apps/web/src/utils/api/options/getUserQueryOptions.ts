import { queryOptions } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/utils/constants'

import type { GetUserRequestConfig } from '../requests'

import { getUser } from '../requests'

export const getUserQueryOptions = ({ params, config }: GetUserRequestConfig) =>
	queryOptions({
		queryKey: [QUERY_KEYS.GET_USER, params.username],
		queryFn: () => getUser({ params, config }),
	})
