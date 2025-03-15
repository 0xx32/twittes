import { valibotResolver } from '@hookform/resolvers/valibot'
import { useLocalStorage } from '@siberiacancode/reactuse'
import { useNavigate } from '@tanstack/react-router'
import { HTTPError } from 'ky'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { usePostLoginMutation } from '@/utils/api/hooks'
import { AUTH_LOCAL_KEY } from '@/utils/constants/global'
import { useProfile } from '@/utils/contexts/profile'
import { useSession } from '@/utils/contexts/session'

import type { LoginFormSchema } from '../-constants'

import { loginFormSchema } from '../-constants'

export const useLoginForm = () => {
	const { setSession } = useSession()
	const { setProfile } = useProfile()
	const navigate = useNavigate()
	const authLocalStorage = useLocalStorage(AUTH_LOCAL_KEY)
	const form = useForm({
		resolver: valibotResolver(loginFormSchema),
		mode: 'onChange',
	})

	const postLoginMutation = usePostLoginMutation()

	const onSubmit = async (values: LoginFormSchema) => {
		try {
			const response = await postLoginMutation.mutateAsync({
				params: values,
			})

			toast.success(response.msg)

			authLocalStorage.set(response.token)
			setSession(true)
			setProfile(response.user)

			navigate({
				to: '/',
				replace: true,
			})
		} catch (error) {
			if (error instanceof HTTPError) {
				const { msg } = await error.response.json<ErrorResponse>()
				toast.error(msg)
			}
		}
	}

	return {
		form,
		state: {
			loading: postLoginMutation.isPending,
		},
		functions: {
			onSubmit,
		},
	}
}
