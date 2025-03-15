import { presetWind3 } from '@unocss/preset-wind3'
// import presetWind4 from '@unocss/preset-wind4'
import { defineConfig, presetIcons } from 'unocss'

import { presetShadcn } from './preset.shadcn'

export default defineConfig({
	presets: [presetWind3(), presetIcons(), presetShadcn()],
	shortcuts: [
		{
			'flex-center': 'flex justify-center items-center',
			'flex-col-center': 'flex flex-col justify-center items-center',
			container: 'max-w-[1340px] mx-auto p-4',
			'grid-lay': 'grid grid-cols-[240px_1fr_280px] gap-4',
		},
	],
	theme: {
		colors: {
			board: {
				DEFAULT: 'hsl(var(--board))',
				foreground: 'hsl(var(--board-foreground))',
			},
			dashboard: {
				DEFAULT: 'hsl(var(--dashboard))',
				foreground: 'hsl(var(--dashboard-foreground))',
			},
		},
		borderRadius: {
			board: 'var(--board-radius)',
		},
	},
})
