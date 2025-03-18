import { api } from '@/utils/api'

export type GetPostsRequestConfig = KyRequestConfig

export const getPosts = ({ config }: GetPostsRequestConfig) => api.get('posts', config).json<Post>()

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
		.json<Post[]>()
