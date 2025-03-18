type paths = import('@/generated/api/schema').paths

interface SuccessResponse {
	message: string
}
interface ErrorResponse {
	message: string
	errors: string[]
}

type Profile = ProfileResponse['profile']
type User = GetUserResponse
type Post = PostResponse

type PostUploadResponse =
	paths['/api/upload']['post']['responses']['200']['content']['aplication/json']

type PostAuthRegisterResponse =
	paths['/api/auth/register']['post']['responses']['201']['content']['aplication/json']
type PostAuthLoginResponse =
	paths['/api/auth/login']['post']['responses']['200']['content']['aplication/json']
type GetAuthLogoutResponse =
	paths['/api/auth/logout']['get']['responses']['200']['content']['aplication/json']

type GetProfileResponse =
	paths['/api/profile']['get']['responses']['200']['content']['aplication/json']
type GetUserResponse =
	paths['/api/user/{username}']['get']['responses']['200']['content']['aplication/json']

type GetPostsResponse = paths['/api/posts']['get']['responses']['200']['content']['aplication/json']
type GetPostsUserResponse =
	paths['/api/posts/user/{username}']['get']['responses']['200']['content']['aplication/json']
type GetPostResponse =
	paths['/api/posts/{postId}']['get']['responses']['200']['content']['aplication/json']
type PostPostResponse =
	paths['/api/posts']['post']['responses']['201']['content']['aplication/json']
