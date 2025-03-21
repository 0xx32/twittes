import { api } from '@/utils/api'

export interface GetPostsUserParams {
	username: string
}

export type GetPostsUserRequestConfig = KyRequestConfig<GetPostsUserParams>

export const getPostsUser = ({ params, config }: GetPostsUserRequestConfig) =>
	api.get(`posts/users/${params.username}`, config).json<GetPostsUserResponse>()
