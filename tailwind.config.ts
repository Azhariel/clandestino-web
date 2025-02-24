import type { Config } from 'tailwindcss';
import { heroui } from '@heroui/react';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			heading: ['Protest Revolution', 'serif'],
		},
		extend: {
			colors: {
				'neon-green': '#39FF14',
				'neon-purple': '#BC13FE',
				'dark-gray': '#1a1a1a',
			},
			boxShadow: {
				glitch: '0 0 15px #39FF14, 0 0 30px #BC13FE',
			},
			// background: 'var(--background)',
			// foreground: 'var(--foreground)',
		},
	},
	darkMode: 'class',
	plugins: [heroui({ addCommonColors: true })],
} satisfies Config;
