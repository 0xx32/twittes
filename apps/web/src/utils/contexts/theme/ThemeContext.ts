import React from 'react'

export type Theme = 'dark' | 'light' | 'system'

export interface ThemeContextProps {
	theme: Theme
	setTheme: (theme: Theme) => void
}

export const ThemeContext = React.createContext<ThemeContextProps>({
	theme: 'dark',
	setTheme: () => {},
})
