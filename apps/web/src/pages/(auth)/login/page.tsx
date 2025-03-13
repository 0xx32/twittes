import { useDocumentTitle } from '@siberiacancode/reactuse'

import { LoginForm } from '../-components'

export const LoginPage = () => {
	useDocumentTitle('Вход')

	return (
		<div className="h-screen flex flex-col justify-center">
			<LoginForm />
		</div>
	)
}
