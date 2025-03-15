import React from 'react'

import { SessionContext } from './SessionContext'

export interface SessionProviderProps {
	children: React.ReactNode
	defaultSession: boolean
}

export const SessionProvider = ({ children, defaultSession }: SessionProviderProps) => {
	const [session, setSession] = React.useState<boolean>(defaultSession)

	const value = React.useMemo(() => ({ session, setSession }), [session])

	return <SessionContext value={value}>{children}</SessionContext>
}
