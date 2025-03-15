import type { QueryClient } from '@tanstack/react-query'

import { QueryClientProvider } from '@tanstack/react-query'

import type { ProfileProviderProps } from './utils/contexts/profile'
import type { SessionProviderProps } from './utils/contexts/session'
import type { ThemeProviderProps } from './utils/contexts/theme'

import { ProfileProvider } from './utils/contexts/profile'
import { SessionProvider } from './utils/contexts/session'
import { ThemeProvider } from './utils/contexts/theme'

export interface ProvidersProps {
	children: React.ReactNode
	profile: Omit<ProfileProviderProps, 'children'>
	theme: Omit<ThemeProviderProps, 'children'>
	queryClient: QueryClient
	session: Omit<SessionProviderProps, 'children'>
}

export const Providers = ({ theme, profile, queryClient, session, children }: ProvidersProps) => (
	<ThemeProvider {...theme}>
		<ProfileProvider {...profile}>
			<SessionProvider {...session}>
				<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
			</SessionProvider>
		</ProfileProvider>
	</ThemeProvider>
)
