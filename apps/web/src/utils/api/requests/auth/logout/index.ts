import { api } from '@/utils/api'

export type GetLogoutRequestConfig = KyRequestConfig

export const getLogout = ({ config }: GetLogoutRequestConfig) =>
	api.get('auth/logout', config).json<SuccessResponse>()
