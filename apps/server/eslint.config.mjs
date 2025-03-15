import antfu from '@antfu/eslint-config'
import perfectionist from 'eslint-plugin-perfectionist'

export default antfu(
	{
		react: false,
		typescript: true,
		stylistic: false,
	},
	{
		rules: {
			'style/no-tabs': 'off',
			'ts/ban-ts-comment': 'warn',
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
		ignores: ['**/__generated/'],
	}
)
