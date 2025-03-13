import { useDocumentTitle } from '@siberiacancode/reactuse'

import { RegisterForm } from '../-components'

export const RegisterPage = () => {
	useDocumentTitle('Регистрация')

	return (
		<div className="h-screen flex flex-col justify-center">
			<RegisterForm />
		</div>
	)
}
