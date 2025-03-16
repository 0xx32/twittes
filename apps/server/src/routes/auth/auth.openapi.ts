import { describeRoute } from 'hono-openapi'
import { resolver } from 'hono-openapi/valibot'

import { errorServerConfig } from '@/utils/constants/openapi'
import { baseResponseSchema, errorResponseSchema } from '@/utils/constants/shemas'

import {
	authErrorResponseSchema,
	loginResponseSchema,
	registerResponseSchema,
} from './auth.constants'

export const registerSpecs = describeRoute({
	description: 'Регистрация пользователя',
	responses: {
		201: {
			description: 'Успешно',
			content: {
				'aplication/json': { schema: resolver(registerResponseSchema) },
			},
		},
		400: {
			description: 'Ошибка',
			content: {
				'aplication/json': { schema: resolver(authErrorResponseSchema) },
			},
		},
		500: errorServerConfig,
	},
})

export const loginSpecs = describeRoute({
	description: 'Аутентификация пользователя',
	responses: {
		200: {
			description: 'Успешно',
			content: {
				'aplication/json': { schema: resolver(loginResponseSchema) },
			},
		},
		400: {
			description: 'Неверный логин или пароль',
			content: {
				'aplication/json': { schema: resolver(errorResponseSchema) },
			},
		},
		404: {
			description: 'Пользователь не найден',
			content: {
				'aplication/json': { schema: resolver(errorResponseSchema) },
			},
		},
		500: errorServerConfig,
	},
})

export const logoutSpecs = describeRoute({
	description: 'Выход из системы',
	responses: {
		200: {
			description: 'Вы вышли из системы',
			content: {
				'aplication/json': { schema: resolver(baseResponseSchema) },
			},
		},
		401: {
			description: 'Вы не авторизованы',
			content: {
				'aplication/json': { schema: resolver(errorResponseSchema) },
			},
		},
		500: errorServerConfig,
	},
})
