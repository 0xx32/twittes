import { api } from '@/utils/api'

export interface PostAuthLoginParams {
	username: string
	password: string
}

export type PostAuthLoginRequestConfig = KyRequestConfig<PostAuthLoginParams>

export const postAuthLogin = ({ params, config }: PostAuthLoginRequestConfig) =>
	api
		.post('auth/login', {
			json: params,
			...config,
		})
		.json<PostAuthLoginResponse>()
