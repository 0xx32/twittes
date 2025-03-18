import { Twitt } from '../Twitt'

interface TwittesFeedProps {
	twittes: Post[]
}

export const TwittesFeed = ({ twittes }: TwittesFeedProps) => {
	return (
		<div className="">
			<div>
				{twittes?.map((twitt) => (
					<Twitt key={twitt.id} twitt={twitt} className="mb-5 [&:last-child]:mb-0" />
				))}
			</div>
		</div>
	)
}
