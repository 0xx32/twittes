import { api } from '@/utils/api'

export type GetProfileRequestConfig = KyRequestConfig

export const getProfile = ({ config }: GetProfileRequestConfig) =>
	api.get('profile', config).json<{ profile: User }>()
