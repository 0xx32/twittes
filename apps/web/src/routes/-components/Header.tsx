import { ModeToggle } from '@/components'
import { Input } from '@/components/ui'

export const Header = () => {
	return (
		<header className="grid-lay items-center">
			<div className="flex items-center justify-between pr-4">
				<img src="/images/logo.svg" alt="logo" width={30} />
				<ModeToggle />
			</div>

			<div>dawad</div>

			<div>
				<Input placeholder="Search" />
			</div>
		</header>
	)
}
