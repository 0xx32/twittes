import clsx from 'clsx'

interface TwittProps extends React.ComponentProps<'div'> {
	twitt: Twitt
}

export const Twitt = ({ twitt, className, ref, ...props }: TwittProps) => {
	return (
		<div ref={ref} className={clsx('rounded-board bg-board p-5', className)} {...props}>
			<div>Creator</div>
			<p>{twitt.content}</p>
		</div>
	)
}
