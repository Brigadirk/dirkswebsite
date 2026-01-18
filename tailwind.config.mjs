/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// Bauhaus primary palette
				bauhaus: {
					black: '#0d1b2a',
					charcoal: '#1b2838',
					steel: '#2a3f5f',
					red: '#E53935',
					yellow: '#FFD600',
					blue: '#1565C0',
					cream: '#FAF3E0',
					white: '#FEFEFE',
				},
				// Gay mode palette
				gay: {
					pink: '#FF69B4',
					hotpink: '#FF1493',
					gold: '#FFD700',
					purple: '#9B59B6',
					lavender: '#E6E6FA',
					coral: '#FF7F50',
					mint: '#98FF98',
					sky: '#87CEEB',
				},
				// Jugendstil palette
				jugend: {
					sage: '#8B9A6D',
					gold: '#C9A227',
					cream: '#F5F0E1',
					plum: '#6B4E5C',
					forest: '#2D4A3E',
					copper: '#B87333',
					ivory: '#FFFFF0',
					moss: '#4A5D4A',
				},
			},
			fontFamily: {
				bauhaus: ['Space Grotesk', 'sans-serif'],
			},
			animation: {
				'spin-slow': 'spin 20s linear infinite',
				'float': 'float 6s ease-in-out infinite',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
