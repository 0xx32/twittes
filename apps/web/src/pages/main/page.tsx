import { useGetPostsInfiniteQuery } from '@/utils/api/hooks'

import { Twitt } from '../-components'
import { CreateNewPostForm } from './-components'

const PAGINATION = {
	OFFSET: 0,
	LIMIT: 10,
}

export const MainPage = () => {
	const postsQuery = useGetPostsInfiniteQuery({
		limit: PAGINATION.LIMIT,
		offset: PAGINATION.OFFSET,
	})
	const posts = postsQuery.data?.pages.flatMap((page) => page.posts)

	return (
		<div className="">
			<div className="mb-6">
				<CreateNewPostForm />
			</div>
			{posts?.map((post) => (
				<Twitt key={post.id} twitt={post} className="mb-5 [&:last-child]:mb-0" />
			))}
		</div>
	)
}
