import { api } from '@/utils/api'

export type GetAuthLogoutRequestConfig = KyRequestConfig

export const getAuthLogout = ({ config }: GetAuthLogoutRequestConfig) =>
	api.get('auth/logout', config).json<GetAuthLogoutResponse>()
