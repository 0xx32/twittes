import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		TanStackRouterVite({
			target: 'react',
			autoCodeSplitting: true,
		}),
		react(),
		UnoCSS(),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@/generated': path.resolve(__dirname, './generated'),
		},
	},
})
