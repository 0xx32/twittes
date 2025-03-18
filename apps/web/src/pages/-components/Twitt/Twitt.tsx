import clsx from 'clsx'

interface TwittProps extends React.ComponentProps<'div'> {
	twitt: Post
}

export const Twitt = ({ twitt, className, ref, ...props }: TwittProps) => (
	<div
		ref={ref}
		className={clsx(
			'rounded-board bg-board p-8 hover:bg-board/80 transition-colors cursor-pointer',
			className
		)}
		{...props}
	>
		<div className="mb-4 flex items-center gap-3">
			<div>
				{twitt.creator.picture && (
					<img src={twitt.creator.picture} className="h-10 w-10 rounded-full" alt="аватар" />
				)}
				{!twitt.creator.picture && <div className="h-10 w-10 rounded-full bg-accent"></div>}
			</div>
			<span className="font-semibold">{twitt.creator.displayName}</span>
			<span className="darl:text-gray-600">@{twitt.creator.username}</span>
		</div>
		<p className="whitespace-pre-line font-semibold capitalize dark:text-gray-300">
			{twitt.content}
		</p>
	</div>
)
