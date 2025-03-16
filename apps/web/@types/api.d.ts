interface SuccessResponse {
	message: string
}
interface ErrorResponse {
	message: string
	errors: string[]
}

type LoginResponse = {
	token: string
	user: User
} & SuccessResponse

type RegisterResponse = {
	userId: string
} & SuccessResponse

interface PostsResponse {
	posts: Post[]
	offset: number
	limit: number
}

type Profile = import('@repo/db').User
type Twitt = import('@repo/db').Post
type Post = import('@repo/db').Post
