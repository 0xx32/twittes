import { queryOptions } from '@tanstack/react-query'

import type { GetUserRequestConfig } from '../requests'

import { QUERY_KEYS } from '../constants'
import { getUser } from '../requests'

export const getUserQueryOptions = ({ params, config }: GetUserRequestConfig) =>
	queryOptions({
		queryKey: [QUERY_KEYS.GET_USER, params.username],
		queryFn: () => getUser({ params, config }),
	})
