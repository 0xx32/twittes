import { api } from '@/utils/api'

export interface PostLoginParams {
	username: string
	password: string
}

export type PostLoginRequestConfig = KyRequestConfig<PostLoginParams>

export const postLogin = ({ params, config }: PostLoginRequestConfig) =>
	api
		.post('auth/login', {
			json: params,
			...config,
		})
		.json<SuccessResponse>()
