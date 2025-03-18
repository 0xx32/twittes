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

type Post = import('@repo/db').Prisma.PostGetPayload<{
	omit: {
		password: true
	}
	include: {
		creator: {
			include: {
				id: true
				username: true
				picture: true
			}
		}
	}
}>

type Profile = import('@repo/db').User
type Twitt = Post
