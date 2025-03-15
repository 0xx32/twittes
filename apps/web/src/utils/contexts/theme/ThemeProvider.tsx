import React from 'react'

import type { Theme} from './ThemeContext';

import { ThemeContext } from './ThemeContext'

export interface ThemeProviderProps {
	children: React.ReactNode
	defaultTheme?: Theme
	storageKey?: string
}

export const ThemeProvider = ({
	children,
	defaultTheme = 'system',
	storageKey = 'vite-ui-theme',
	...props
}: ThemeProviderProps) => {
	const [theme, setTheme] = React.useState<Theme>(
		() => (localStorage.getItem(storageKey) as Theme) || defaultTheme
	)

	React.useEffect(() => {
		const root = window.document.documentElement

		root.classList.remove('light', 'dark')

		if (theme === 'system') {
			const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light'

			root.classList.add(systemTheme)
			return
		}

		root.classList.add(theme)
	}, [theme])

	const value = React.useMemo(
		() => ({
			theme,
			setTheme: (theme: Theme) => {
				localStorage.setItem(storageKey, theme)
				setTheme(theme)
			},
		}),
		[theme, storageKey]
	)

	return (
		<ThemeContext {...props} value={value}>
			{children}
		</ThemeContext>
	)
}
