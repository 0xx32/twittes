import clsx from 'clsx'
import { EllipsisVertical } from 'lucide-react'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui'
import { formatDistance as formatDistanceDate } from '@/utils/helpers/date'

import { useTwitt } from './useTwitt'

interface TwittProps extends React.ComponentProps<'div'> {
	twitt: Post
}

export const Twitt = ({ twitt, className, ref, ...props }: TwittProps) => {
	const { functions } = useTwitt({ postId: twitt.id })

	return (
		<div
			ref={ref}
			className={clsx(
				'rounded-board bg-board p-6 px-4 hover:bg-board/80 transition-colors cursor-pointer border border-neutral-900',
				className
			)}
			{...props}
		>
			<div className="mb-4 flex items-center gap-3 text-gray-400">
				<div>
					{twitt.creator.picture && (
						<img src={twitt.creator.picture} className="h-10 w-10 rounded-full" alt="аватар" />
					)}
					{!twitt.creator.picture && <div className="h-10 w-10 rounded-full bg-accent"></div>}
				</div>
				<span className="text-white font-semibold">{twitt.creator.displayName}</span>
				<span className="darl:text-gray-600">@{twitt.creator.username}</span>
				<span> {formatDistanceDate(new Date(twitt.createdAt), new Date())}</span>

				<DropdownMenu>
					<DropdownMenuTrigger className="ml-auto p-2">
						<EllipsisVertical className="rotate-90" />
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem
							className="text-red-600"
							onClick={() => functions.deletePost(twitt.id)}
						>
							Удалить
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<p className="whitespace-pre-line font-semibold capitalize dark:text-gray-300">
				{twitt.content}
			</p>

			<div className="mt-4">
				{twitt.image && (
					<img src={`http://localhost:4040/${twitt.image}`} className="rounded-board" alt="" />
				)}
			</div>
		</div>
	)
}
