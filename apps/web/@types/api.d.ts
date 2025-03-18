type paths = import('@/generated/api/schema').paths

interface SuccessResponse {
	message: string
}
interface ErrorResponse {
	message: string
	errors: string[]
}

type Profile = ProfileResponse['profile']
type Post = PostResponse

type UploadResponse = paths['/api/upload']['post']['responses']['200']['content']['aplication/json']

type AuthRegisterResponse =
	paths['/api/auth/register']['post']['responses']['201']['content']['aplication/json']
type AuthLoginResponse =
	paths['/api/auth/login']['post']['responses']['200']['content']['aplication/json']
type AuthLogoutResponse =
	paths['/api/auth/logout']['get']['responses']['200']['content']['aplication/json']

type ProfileResponse =
	paths['/api/profile']['get']['responses']['200']['content']['aplication/json']
type UsernameResponse =
	paths['/api/user/{username}']['get']['responses']['200']['content']['aplication/json']

type PostsResponse = paths['/api/posts']['get']['responses']['200']['content']['aplication/json']
type CreatePostResponse =
	paths['/api/posts']['post']['responses']['201']['content']['aplication/json']
type PostsUserResponse =
	paths['/api/posts/user/{username}']['get']['responses']['200']['content']['aplication/json']
type PostResponse =
	paths['/api/posts/{postId}']['get']['responses']['200']['content']['aplication/json']
