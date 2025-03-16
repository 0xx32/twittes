import type { Post } from '@repo/db'

import { api } from '@/utils/api'

export interface GetUserPostsParams {
	username: string
}

export type GetUserPostsRequestConfig = KyRequestConfig<GetUserPostsParams>

export const getUserPosts = ({ params, config }: GetUserPostsRequestConfig) =>
	api.get(`posts/user/${params.username}`, { ...config }).json<Post[]>()
