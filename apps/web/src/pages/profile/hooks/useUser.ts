import { useParams } from '@tanstack/react-router'

import { useGetUserQuery } from '@/utils/api/hooks'

export const useUser = () => {
	const { username } = useParams({ strict: false })
	const userQuery = useGetUserQuery({ username: username ?? '' })

	return {
		userQuery,
		user: userQuery.data,
	}
}
