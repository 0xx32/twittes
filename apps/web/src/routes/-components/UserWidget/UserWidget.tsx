import { Ellipsis } from 'lucide-react'

interface UserWidgetProps {
	user: Profile
	onClick?: () => void
}

export const UserWidget = ({ user, onClick }: UserWidgetProps) =>
	<div className="flex cursor-pointer items-center gap-2 rounded-full bg-board p-2 pr-4 transition-opacity hover:opacity-80" onClick={onClick}>
		<div>
			{user.picture && <img src={user.picture} alt="avatar" width={40} />}
			<div className='h-10 w-10 rounded-full bg-amber-300' />
		</div>

		<div>
			<div>{user.displayName}</div>
			<div className="text-xs">@{user.username}</div>
		</div>

		<button type='button' className='ml-a'><Ellipsis className='rotate-90' /></button>
	</div>

