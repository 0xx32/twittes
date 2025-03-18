type Gender = 'mens' | 'womens'

export const AVATARS = {
	url: 'https://api.dicebear.com/9.x/adventurer/svg',
	randomAvatar(gender: Gender) {
		return this[gender][Math.floor(Math.random() * this[gender].length)]
	},
	avatarUrl(gender: Gender) {
		return `${this.url}?seed=${this.randomAvatar(gender).seed}`
	},

	mens: [
		{ seed: 'Ryker', color: '#f0f' },
		{ seed: 'Easton', color: '#f0f' },
		{ seed: 'Mason', color: '#f0f' },
		{ seed: 'Chase', color: '#f0f' },
	],
	womens: [
		{ seed: 'Adrian', color: '#f0f' },
		{ seed: 'Liliana', color: '#f0f' },
		{ seed: 'George', color: '#f0f' },
		{ seed: 'Aiden', color: '#f0f' },
		{ seed: 'Jude', color: '#f0f' },
	],
} as const
