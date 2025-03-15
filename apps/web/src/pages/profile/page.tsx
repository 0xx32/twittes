import { useParams } from '@tanstack/react-router'

import { useGetUserTwittesQuery } from '@/utils/api/hooks'

import { TwittesFeed } from '../-components'
import { UserDetails } from './-components'

export const UserPage = () => {
	const { username } = useParams({ from: '/(base)/_base/$username/' })
	const userTwittesQuery = useGetUserTwittesQuery({ username })

	return (
		<div className="flex flex-col gap-5">
			<UserDetails />
			<TwittesFeed twittes={userTwittesQuery.data ?? []} />
		</div>
	)
}
