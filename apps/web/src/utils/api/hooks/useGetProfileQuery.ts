import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '../constants'
import { getProfile } from '../requests'

export const useGetProfileQuery = (settings?: QuerySettings<typeof getProfile>) =>
	useQuery({
		queryKey: [QUERY_KEYS.GET_PROFILE],
		queryFn: () => getProfile({ config: settings?.config }),
		...settings?.options,
	})
