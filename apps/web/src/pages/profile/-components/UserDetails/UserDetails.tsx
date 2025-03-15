import { AVATARS } from '@/utils/constants/avatars'

import { useUser } from '../../hooks'

export const UserDetails = () => {
	const { user } = useUser()

	return (
		<div className="overflow-hidden rounded-board bg-board">
			<div className="h-[130px] from-accent/20 to-accent/40 bg-gradient-to-r p-5" />
			<div className="relative px-5 pb-5">
				<div className="mb-4 h-26 w-26 rounded-full bg-board p-1 -mt-13">
					<div className="h-full w-full rounded-full bg-amber">
						{user.picture && (
							<img
								src={user.picture}
								className="h-full w-full rounded-full object-cover"
								alt="avatar"
							/>
						)}
						{!user.picture && (
							<img
								src={AVATARS.avatarUrl('mens')}
								className="h-full w-full rounded-full object-cover"
								alt="avatar"
							/>
						)}
					</div>
				</div>
				<div className="text-2xl font-bold capitalize">{user.displayName}</div>
				{user.country && <div className="mb-2 capitalize">{user.country}</div>}
				<div className="">@{user.username}</div>

				<button
					type="button"
					className="absolute right-5 top-16 border rounded-3xl px-6 py-2 font-bold hover:bg-gray-600"
				>
					Изменить
				</button>
			</div>
		</div>
	)
}
