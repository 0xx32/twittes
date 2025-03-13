import React from 'react'

export type Theme = 'dark' | 'light' | 'system'

export interface ThemeState {
	theme: Theme
	setTheme: (theme: Theme) => void
}

const initialState: ThemeState = {
	theme: 'system',
	setTheme: () => null,
}

export const ThemeContext = React.createContext<ThemeState>(initialState)
