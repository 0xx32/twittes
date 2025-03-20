import { withAccelerate } from '@prisma/extension-accelerate'
import { PrismaClient } from 'generated/client'

export const prisma = new PrismaClient({
	errorFormat: 'pretty',
}).$extends(withAccelerate())
