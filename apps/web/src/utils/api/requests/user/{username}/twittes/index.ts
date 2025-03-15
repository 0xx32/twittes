import { api } from '@/utils/api'

export interface GetUserTwittesParams {
	username: string
}

export type GetUserTwittesRequestConfig = KyRequestConfig<GetUserTwittesParams>

export const getUserTwittes = ({ params, config }: GetUserTwittesRequestConfig) =>
	api.get(`user/${params.username}/twittes`, { ...config }).json<Twitt[]>()
