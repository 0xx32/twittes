import { describeRoute } from 'hono-openapi'
import { resolver } from 'hono-openapi/valibot'

import { errorServerConfig } from '@/utils/constants/openapi'
import { baseResponseSchema, errorResponseSchema } from '@/utils/constants/shemas'

import { postResponseSchema, postsResponseSchema } from './posts.constants'

export const postsRouteSpecs = describeRoute({
	description: 'Получение постов',
	responses: {
		200: {
			description: 'Успешно',
			content: {
				'aplication/json': { schema: resolver(postsResponseSchema) },
			},
		},
		500: errorServerConfig,
	},
})
export const postRouteSpecs = describeRoute({
	description: 'Получение поста',
	responses: {
		200: {
			description: 'Успешно',
			content: {
				'aplication/json': { schema: resolver(postResponseSchema) },
			},
		},
		404: {
			description: 'Пост не найден',
			content: {
				'aplication/json': { schema: resolver(errorResponseSchema) },
			},
		},
		500: errorServerConfig,
	},
})
export const createPostRouteSpecs = describeRoute({
	description: 'Создание поста',
	responses: {
		201: {
			description: 'Успешно',
			content: {
				'aplication/json': { schema: resolver(postResponseSchema) },
			},
		},
		400: {
			description: 'Ошибка создания поста',
			content: {
				'aplication/json': { schema: resolver(errorResponseSchema) },
			},
		},
		500: errorServerConfig,
	},
})
export const editPostRouteSpecs = describeRoute({
	description: 'Редактирование поста',
	responses: {
		200: {
			description: 'Успешно',
			content: { 'aplication/json': { schema: resolver(postResponseSchema) } },
		},
		500: errorServerConfig,
	},
})
export const deletePostRouteSpecs = describeRoute({
	description: 'Удаление поста',
	responses: {
		200: {
			description: 'Успешно',
			content: { 'aplication/json': { schema: resolver(baseResponseSchema) } },
		},
		500: errorServerConfig,
	},
})
export const userPostsRouteSpecs = describeRoute({
	description: 'Получение постов пользователя',
	responses: {
		200: {
			description: 'Успешно',
			content: {
				'aplication/json': { schema: resolver(postsResponseSchema) },
			},
		},
		500: errorServerConfig,
	},
})
