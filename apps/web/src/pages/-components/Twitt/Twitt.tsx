import clsx from 'clsx'

interface TwittProps extends React.ComponentProps<'div'> {
	twitt: Twitt
}

export const Twitt = ({ twitt, className, ref, ...props }: TwittProps) => {
	return (
		<div
			ref={ref}
			className={clsx(
				'rounded-board bg-board p-5 hover:bg-board/80 transition-colors cursor-pointer',
				className
			)}
			{...props}
		>
			<div>{twitt.creator.picture && <img src={twitt.creator.picture} alt="" />}</div>
			<p>{twitt.content}</p>
		</div>
	)
}
