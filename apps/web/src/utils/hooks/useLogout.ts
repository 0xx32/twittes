import { useNavigate } from '@tanstack/react-router'
import { toast } from 'sonner'

import { getAuthLogout } from '../api/requests'
import { useSession } from '../contexts/session'

export const useLogout = () => {
	const { setSession } = useSession()
	const navigate = useNavigate()

	const logout = () => {
		getAuthLogout({})
		setSession(false)
		toast.success('Вы вышли из системы')
		navigate({
			to: '/',
			replace: true,
		})
	}

	return logout
}
