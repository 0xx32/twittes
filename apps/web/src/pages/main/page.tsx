import { Loader2 } from 'lucide-react'

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
			<div>
				{state.isLoading && (
					<div className="mt-10 flex justify-center">
						<Loader2 className="animate-spin" size={44} />
					</div>
				)}

				{!state.isLoading &&
					state.posts?.map((post) => (
						<Twitt key={post.id} twitt={post} className="mb-5 [&:last-child]:mb-0" />
					))}

				<div ref={refs.trigger}></div>
			</div>
		</div>
	)
}
