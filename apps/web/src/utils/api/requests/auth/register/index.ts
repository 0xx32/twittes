import { api } from '@/utils/api'

export interface PostRegisterParams {
	username: string
	password: string
	displayName: string
}

export type PostRegisterRequestConfig = KyRequestConfig<PostRegisterParams>

export const postRegister = ({ params, config }: PostRegisterRequestConfig) =>
	api
		.post('auth/register', {
			json: params,
			...config,
		})
		.json<SuccessResponse>()
