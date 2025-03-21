import { api } from '@/utils/api'

export interface GetPostsParams {
	offset: number
	limit: number
	user?: string
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

export interface PatchPostsParams extends PatchPostsParameters {
	content: string
	image?: string
}
export type PatchPostsRequestConfig = KyRequestConfig<PatchPostsParams>

export const patchPosts = ({ params, config }: PatchPostsRequestConfig) =>
	api
		.patch(`posts/${params.postId}`, {
			json: params,
			...config,
		})
		.json<PatchPostResponse>()

export interface DeletePostsParams {
	postId: string
}
export type DeletePostsRequestConfig = KyRequestConfig<DeletePostsParams>

export const deletePosts = ({ params, config }: DeletePostsRequestConfig) =>
	api
		.delete(`posts/${params.postId}`, {
			json: params,
			...config,
		})
		.json<DeletePostResponse>()
