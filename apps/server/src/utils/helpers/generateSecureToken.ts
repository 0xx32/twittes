import { randomBytes } from 'node:crypto'

export const generateSecureToken = (length: number) => randomBytes(length).toString('hex')
