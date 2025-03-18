import { api } from '@/utils/api'

export interface PostPostsParams {
	content: string
	image?: string
}

export type PostPostsRequestConfig = KyRequestConfig<PostPostsParams>

export const postPosts = ({ params, config }: PostPostsRequestConfig) =>
	api
		.post('posts', {
			json: params,
			...config,
		})
		.json<Post>()
