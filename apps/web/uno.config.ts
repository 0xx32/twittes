// unocss.config.ts
import { presetWind } from '@unocss/preset-wind3'
import { defineConfig } from 'unocss'
import presetAnimations from 'unocss-preset-animations'
import { presetShadcn } from 'unocss-preset-shadcn'

export default defineConfig({
	presets: [
		presetWind(),
		presetAnimations(),
		presetShadcn({
			color: 'neutral',
		}),
	],
})
