import type { IconName } from 'lucide-react/dynamic'

import { Link } from '@tanstack/react-router'
import { DynamicIcon } from 'lucide-react/dynamic'

import { ModeToggle } from '@/components'
import { useProfile } from '@/utils/contexts/profile'

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

	return (
		<aside className="sticky h-[calc(100vh-12rem)] flex flex-col pb-6">
			<ul className="mt-5 flex flex-col gap-4">
				{generateLinks({ username: profile?.username ?? 'boblove' }).map((link) => (
					<li key={link.href}>
						<Link
							to={link.href}
							className="flex items-center gap-3 text-primary font-500 hover:text-accent [&.active]:font-600"
						>
							<DynamicIcon name={link.icon} size={18} />
							<span>{link.name}</span>
						</Link>
					</li>
				))}
			</ul>
			<div className="mt-a">
				<ModeToggle />
			</div>
		</aside>
	)
}
