import type { paths } from '../gen/schema'

export type ResponseGetPosts =
	paths['/api/posts']['get']['responses']['200']['content']['aplication/json']
export type ResponseGetPostsUser = ResponseGetPosts
