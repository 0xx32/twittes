import { api } from '@/utils/api'

export interface GetPostsParams {
	offset: number
	limit: number
}
export type GetPostsRequestConfig = KyRequestConfig<GetPostsParams>

export const getPosts = ({ config }: GetPostsRequestConfig) =>
	api.get('posts', config).json<GetPostsResponse>()

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
		.json<PostPostResponse>()
