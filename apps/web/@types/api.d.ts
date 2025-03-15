interface SuccessResponse {
	msg: string
}
interface ErrorResponse {
	msg: string
	code: number
}
interface User {
	id: string
	email: string | null
	username: string
	displayName: string
	picture: string | null
	gender: $Enums.Gender | null
	country: string | null
	age: number | null
	isVerified: boolean
	twitts: Twitt[]
	createdAt: Date
	updatedAt: Date
}
interface Twitt {
	id: string
	title: string
	content: string
	image: string | null
	userId: string
	createdAt: Date
	updatedAt: Date
}

type LoginResponse = {
	token: string
	user: User
} & SuccessResponse

type Profile = User
