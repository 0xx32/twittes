import type { User } from '@repo/db'

import { api } from '@/utils/api'

export interface GetUserParams {
	username: string
}

export type GetUserRequestConfig = KyRequestConfig<GetUserParams>

export const getUser = ({ params, config }: GetUserRequestConfig) =>
	api.get(`user/${params.username}`, { ...config }).json<User>()
