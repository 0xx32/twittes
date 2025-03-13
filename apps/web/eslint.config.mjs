import antfu from '@antfu/eslint-config'
import pluginTanstackQuery from '@tanstack/eslint-plugin-query'
import pluginTanstackRouter from '@tanstack/eslint-plugin-router'
import perfectionist from 'eslint-plugin-perfectionist'

export default antfu(
	{
		react: true,
		typescript: true,
		stylistic: false,
		unocss: true,
	},
	{
		rules: {
			'style/no-tabs': 'off',
			'style/no-mixed-spaces-and-tabs': 'off',
			'ts/ban-ts-comment': 'warn',
			'react/prefer-destructuring-assignment': 'off',
			'react/no-array-index-key': 'warn',
			'antfu/top-level-function': 'off',
		},
	},
	{
		plugins: {
			perfectionist,
		},
		rules: {
			'perfectionist/sort-imports': [
				'error',
				{
					groups: [
						'type',
						['builtin', 'external'],
						'internal-type',
						['internal'],
						['parent-type', 'sibling-type', 'index-type'],
						['parent', 'sibling', 'index'],
						'object',
						'style',
						'side-effect-style',
						'unknown',
					],
					internalPattern: ['^~/.*', '^@/.*'],
					newlinesBetween: 'always',
					order: 'asc',
					type: 'natural',
				},
			],
		},
	},
	{
		name: 'steam-panel/tanstack-query',
		plugins: {
			'@tanstack/query': pluginTanstackQuery,
		},
		// rules: {
		// 	...pluginTanstackQuery.configs.recommended.rules,
		// 	'@tanstack/query/exhaustive-deps': 'warn'
		// }
	},
	{
		name: 'steam-panel/tanstack-router',
		plugins: {
			'@tanstack/router': pluginTanstackRouter,
		},
		rules: {
			...pluginTanstackRouter.configs.recommended.rules,
		},
		ignores: ['generated/routeTree.gen.ts'],
	},
	{
		name: 'steam-panel/router',
		ignores: ['generated/router/*'],
	}
)
