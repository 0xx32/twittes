import { Input } from '@/components/ui'

export const Header = () => {
	return (
		<header className="grid-lay items-center">
			<img src="/images/logo.svg" alt="logo" width={30} />

			<div>dawad</div>

			<div>
				<Input placeholder="Search" />
			</div>
		</header>
	)
}
