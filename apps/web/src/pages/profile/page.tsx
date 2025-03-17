import { useParams } from '@tanstack/react-router'

import { Skeleton } from '@/components/ui'

import { Twitt } from '../-components'
import { UserDetails } from './-components'
import { usePostsFeed } from './hooks'

export const ProfilePage = () => {
	const { username } = useParams({ from: '/(base)/_base/$username/' })
	const postsFeed = usePostsFeed({ username })

	return (
		<div className="flex flex-col gap-5">
			<UserDetails />

			<div>
				<div className=" ">
					{!postsFeed.state.isLoading &&
						postsFeed.state.posts.map((post) => (
							<Twitt key={post.id} twitt={post} className="mb-5 h-60 [&:last-child]:mb-0" />
						))}

					{(postsFeed.state.isLoading || postsFeed.state.isLoadMore) &&
						Array.from({ length: 4 }).map((_, i) => (
							<Skeleton key={i} className="mb-5 h-60 rounded-2xl bg-board [&:last-child]:mb-0" />
						))}

					<div ref={postsFeed.refs.trigger}></div>
				</div>
			</div>
		</div>
	)
}
