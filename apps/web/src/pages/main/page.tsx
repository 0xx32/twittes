import { Skeleton } from '@/components/ui'

import { Twitt } from '../-components'
import { CreateNewPostForm } from './-components'
import { useFeed } from './hooks'

export const MainPage = () => {
	const { state, refs } = useFeed()

	return (
		<div className="">
			<div className="mb-6">
				<CreateNewPostForm />
			</div>
			<>
				{!state.isLoading && (
					<div>
						{state.posts?.map((post) => (
							<Twitt key={post.id} twitt={post} className="mb-5 [&:last-child]:mb-0" />
						))}
					</div>
				)}

				{(state.isLoading || state.isLoadMore) &&
					Array.from({ length: 10 }).map((_, index) => (
						<Skeleton
							key={index}
							className="mb-5 h-40 w-full rounded-xl bg-board [&:last-child]:mb-0"
						/>
					))}

				<div ref={refs.trigger}></div>
			</>
		</div>
	)
}
