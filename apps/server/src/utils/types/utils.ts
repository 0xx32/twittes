import type { Session } from 'hono-sessions'

export interface AppType {
	Variables: Variables
}

interface SessionDataTypes {
	currentSession: import('@/../../prisma/__generated').Session
}

interface Variables {
	session: Session<SessionDataTypes>
	session_key_rotation: boolean
}
