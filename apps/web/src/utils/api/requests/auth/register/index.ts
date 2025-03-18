import { api } from '@/utils/api'

export interface PostAuthRegisterParams {
	username: string
	password: string
	displayName: string
}

export type PostAuthRegisterRequestConfig = KyRequestConfig<PostAuthRegisterParams>

export const postAuthRegister = ({ params, config }: PostAuthRegisterRequestConfig) =>
	api
		.post('auth/register', {
			json: params,
			...config,
		})
		.json<RegisterResponse>()
