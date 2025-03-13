import { generateSecureToken } from '../helpers'

export const SESSION_OPTIONS = {
	encryptionKey: generateSecureToken(32),
	expireAfterSeconds: 900,
	cookieOptions: {
		sameSite: 'Lax',
		path: '/',
		httpOnly: true,
	},
} as const
