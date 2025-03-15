import { useSuspenseQuery } from '@tanstack/react-query'
import { useParams } from '@tanstack/react-router'

import { getUserQueryOptions } from '@/utils/api/options'

export const useUser = () => {
	const { username } = useParams({ strict: false })
	const userQuery = useSuspenseQuery(getUserQueryOptions({ params: { username: username ?? '' } }))

	return {
		userQuery,
		user: userQuery.data,
	}
}
