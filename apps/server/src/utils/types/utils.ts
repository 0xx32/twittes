import type { Session, User } from 'prisma/__generated/default'

interface Variables {
	user: User
	session: Session
}

export interface AppType {
	Variables: Variables
}
