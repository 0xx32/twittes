import { Hono } from 'hono'
import { validator as vValidator } from 'hono-openapi/valibot'

import type { AppType } from '@/utils/types/utils'

import { paginationSearchQuerySchema } from '@/utils/constants/shemas'
import { prisma } from '@/utils/prisma'

import { postSelectSchema } from './post.constants'
import {
	createPostRouteSpecs,
	postRouteSpecs,
	postsRouteSpecs,
	userPostsRouteSpecs,
} from './post.openapi'
import { createPostJsonValidator } from './post.validators'

export const postRoute = new Hono<AppType>()

postRoute.get(
	'/',
	vValidator('query', paginationSearchQuerySchema),
	postsRouteSpecs,
	async (ctx) => {
		const { size, page } = ctx.req.valid('query')

		const currentPage = page ?? 1
		const currentSize = size ?? 10
		const totalPost = await prisma.post.count()
		const skip = currentPage === 1 ? 0 : (currentPage - 1) * currentSize

		const posts = await prisma.post.findMany({
			include: { ...postSelectSchema },
			skip,
			take: currentSize,
		})
		return ctx.json({
			posts,
			total: totalPost,
			page: currentPage,
			size,
		})
	}
)

postRoute.get('/:postId', postRouteSpecs, async (ctx) => {
	const postId = ctx.req.param('postId')
	const post = await prisma.post.findUnique({
		where: { id: postId },
		include: { ...postSelectSchema },
	})

	if (!post) {
		return ctx.json({ msg: 'Пост не найден' }, 404)
	}

	return ctx.json(post)
})

postRoute.post('/', createPostJsonValidator, createPostRouteSpecs, async (ctx) => {
	const postDto = ctx.req.valid('json')
	const user = ctx.get('user')

	const post = await prisma.post.create({
		data: {
			creatorId: user.id,
			title: 'user.id',
			content: postDto.content,
			image: postDto.image ?? null,
		},
	})

	return ctx.json(post)
})

postRoute.get('/user/:userId', userPostsRouteSpecs, async (ctx) => {
	const userId = ctx.req.param('userId')
	const posts = await prisma.post.findMany({
		where: { creatorId: userId },
		include: { ...postSelectSchema },
	})

	return ctx.json(posts)
})
