import { valibotResolver } from '@hookform/resolvers/valibot'
import { useNavigate } from '@tanstack/react-router'
import { HTTPError } from 'ky'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { usePostLoginMutation } from '@/utils/api/hooks'

import type { LoginFormSchema } from '../-constants'

import { loginFormSchema } from '../-constants'

export const useLoginForm = () => {
	const form = useForm({
		resolver: valibotResolver(loginFormSchema),
		mode: 'onChange',
	})
	const navigate = useNavigate()

	const postLoginMutation = usePostLoginMutation()

	const onSubmit = async (values: LoginFormSchema) => {
		try {
			const response = await postLoginMutation.mutateAsync({
				params: values,
			})

			toast.success(response.msg)
			navigate({ to: '/', from: '/login' })
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
