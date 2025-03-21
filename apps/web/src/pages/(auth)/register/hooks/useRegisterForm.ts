import { valibotResolver } from '@hookform/resolvers/valibot'
import { useNavigate } from '@tanstack/react-router'
import { HTTPError } from 'ky'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { usePostAuthRegisterMutation } from '@/utils/api/hooks'

import type { RegisterFormSchema } from '../constants'

import { registerFormSchema } from '../constants'

export const useRegisterForm = () => {
	const form = useForm<RegisterFormSchema>({
		resolver: valibotResolver<RegisterFormSchema>(registerFormSchema),
		mode: 'onChange',
	})
	const navigate = useNavigate()

	const postRegisterMutation = usePostAuthRegisterMutation()

	const onSubmit = form.handleSubmit(async (values: RegisterFormSchema) => {
		try {
			const response = await postRegisterMutation.mutateAsync({
				params: values,
			})

			toast.success(response.message)
			navigate({ to: '/', from: '/register' })
		} catch (error) {
			if (error instanceof HTTPError) {
				const { message } = await error.response.json<ErrorResponse>()
				toast.error(message)
			}
		}
	})

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
