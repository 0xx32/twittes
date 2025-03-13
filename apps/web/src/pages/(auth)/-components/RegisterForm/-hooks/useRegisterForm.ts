import { valibotResolver } from '@hookform/resolvers/valibot'
import { useNavigate } from '@tanstack/react-router'
import { HTTPError } from 'ky'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { usePostRegisterMutation } from '@/utils/api/hooks'

import type { RegisterFormSchema } from '../-constants'

import { registerFormSchema } from '../-constants'

export const useRegisterForm = () => {
	const form = useForm({
		resolver: valibotResolver(registerFormSchema),
		mode: 'onChange',
	})
	const navigate = useNavigate()

	const postRegisterMutation = usePostRegisterMutation()

	const onSubmit = async (values: RegisterFormSchema) => {
		try {
			const response = await postRegisterMutation.mutateAsync({
				params: values,
			})

			toast.success(response.msg)
			navigate({ to: '/', from: '/register' })
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
			loading: postRegisterMutation.isPending,
		},
		functions: {
			onSubmit,
		},
	}
}
