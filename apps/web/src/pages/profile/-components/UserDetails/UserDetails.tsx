import { Button } from '@/components/ui'
import { AVATARS } from '@/utils/constants/avatars'

import { useUser } from '../../hooks'

export const UserDetails = () => {
	const { user } = useUser()

	if (!user) return null

	return (
		<div className="overflow-hidden rounded-board bg-board">
			<div className="h-[130px] from-accent/20 to-accent/40 bg-gradient-to-r p-5" />
			<div className="px-5 pb-5">
				<div className="w-[max-content] flex flex-col items-center gap-2 -mt-13">
					<div className="h-26 w-26 rounded-full bg-board p-1">
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
					<div className="mb-4 text-2xl font-bold capitalize">{user.username}</div>
				</div>
				<div className="w-full flex items-center justify-end gap-2">
					<Button>Написать</Button>
				</div>
			</div>
		</div>
	)
}
