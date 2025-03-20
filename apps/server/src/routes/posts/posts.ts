import { Hono } from 'hono'
import { validator as vValidator } from 'hono-openapi/valibot'

import type { AppType } from '@/utils/types/utils'

import { paginationSearchQuerySchema } from '@/utils/constants/shemas'
import { prisma } from '@/utils/prisma'

import { postSelectSchema } from './posts.constants'
import {
	createPostRouteSpecs,
	postRouteSpecs,
	postsRouteSpecs,
	userPostsRouteSpecs,
} from './posts.openapi'
import { createPostJsonValidator } from './posts.validators'

export const postsRoute = new Hono<AppType>()

//Получение всех постов
postsRoute.get(
	'/',
	vValidator('query', paginationSearchQuerySchema),
	postsRouteSpecs,
	async (ctx) => {
		const search = ctx.req.valid('query')

		const offset = search.offset ? Number(search.offset) : 0
		const limit = search.limit ? Number(search.limit) : undefined

		const posts = await prisma.post.findMany({
			include: { ...postSelectSchema },
			skip: offset,
			take: limit,
			orderBy: { createdAt: 'desc' },
		})
		return ctx.json({ posts, offset, limit })
	}
)
//Получение поста по id
postsRoute.get('/:postId', postRouteSpecs, async (ctx) => {
	const postId = ctx.req.param('postId')
	const post = await prisma.post.findUnique({
		where: { id: postId },
		include: { ...postSelectSchema },
	})

	if (!post) {
		return ctx.json({ message: 'Пост не найден' }, 404)
	}

	return ctx.json(post)
})

//Создание поста
postsRoute.post('/', createPostJsonValidator, createPostRouteSpecs, async (ctx) => {
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

	return ctx.json(post, 201)
})

//Получение постов пользователя
postsRoute.get(
	'/users/:username',
	vValidator('query', paginationSearchQuerySchema),
	userPostsRouteSpecs,
	async (ctx) => {
		const username = ctx.req.param('username')
		const search = ctx.req.valid('query')

		const offset = search.offset ? +search.offset : 0
		const limit = search.limit ? +search.limit : undefined

		const posts = await prisma.post.findMany({
			where: { creator: { username } },
			include: { ...postSelectSchema },
			skip: offset,
			take: limit,
		})

		return ctx.json({ posts, offset, limit })
	}
)
