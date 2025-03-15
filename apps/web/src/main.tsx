import { createRoot } from 'react-dom/client'

import type { ProvidersProps } from './providers'

import { App } from './app'
import { Providers } from './providers'
import { getProfile } from './utils/api/requests'
import { AUTH_LOCAL_KEY } from './utils/constants/global'
import { queryClient } from './utils/globals/queryClient'
import { router } from './utils/globals/router'

import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'
import '@/assets/styles/global.css'

const providersProps: Omit<ProvidersProps, 'children'> = {
	theme: { defaultTheme: 'dark', storageKey: 'vite-ui-theme' },
	profile: { defaultProfile: undefined },
	session: { defaultSession: false },
	queryClient,
}



async function init() {
	const token = localStorage.getItem(AUTH_LOCAL_KEY)



	if (token) {

		try {
			const getProfileQuery = await queryClient.fetchQuery({
				queryKey: ['getProfile'],
				queryFn: () => getProfile({}),
			})

			providersProps.profile.defaultProfile = getProfileQuery.profile
			providersProps.session.defaultSession = !!getProfileQuery
		} catch (error) {
			console.error(error);
			
			router.history.push(window.location.search)
		}




		createRoot(document.getElementById('root')!).render(
			<Providers {...providersProps}>
				<App queryClient={queryClient} />
			</Providers>
		)
	}
}
init()
