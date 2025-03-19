import type { IconName } from 'lucide-react/dynamic'

import { Link } from '@tanstack/react-router'
import { DynamicIcon } from 'lucide-react/dynamic'

import { ModeToggle } from '@/components'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui'
import { useProfile } from '@/utils/contexts/profile'
import { useLogout } from '@/utils/hooks'

import { UserWidget } from '../UserWidget'

interface LinkItem {
	name: string
	href: string
	icon: IconName
}

const generateLinks = ({ username }: { username: string }): LinkItem[] => [
	{ name: 'Домой', href: '/', icon: 'home' },
	{ name: 'Сообщения', href: '/messages', icon: 'message-circle' },
	{ name: 'Профиль', href: `/${username}`, icon: 'user' },
]

export const Sidebar = () => {
	const { profile } = useProfile()
	const logout = useLogout()

	return (
		<aside className="sticky top-5 h-[calc(100vh-12rem)] flex flex-col pb-6">
			<div className="mb-10 flex items-center justify-between pr-4">
				<img src="/images/logo.svg" alt="logo" width={30} />
				<ModeToggle />
			</div>

			<ul className="mt-5 flex flex-col gap-4">
				{generateLinks({ username: profile?.username }).map((link) => (
					<li key={link.href}>
						<Link
							to={link.href}
							className="flex items-center gap-3 text-xl text-primary font-500 hover:text-accent [&.active]:font-600"
						>
							<DynamicIcon name={link.icon} size={18} />
							<span>{link.name}</span>
						</Link>
					</li>
				))}
			</ul>
			<div className="mt-a">
				<DropdownMenu>
					<DropdownMenuTrigger className="w-full focus-visible:outline-none">
						<UserWidget user={profile} />
					</DropdownMenuTrigger>
					<DropdownMenuContent
						align="start"
						className="w-[240px] translate-y-2 rounded-full bg-board"
					>
						<DropdownMenuItem
							className="w-full cursor-pointer rounded-full hover:bg-red-500 dark:hover:bg-red-500"
							onClick={logout}
						>
							Выйти из @{profile?.username}
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</aside>
	)
}
