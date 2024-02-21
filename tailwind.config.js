/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			inter: ['Inter', 'sans-serif'],
		},
		extend: {
			colors: {
				// custom colors for evlaveia
				'evl-primary': '#00B074',
				'evl-secondary': '#17124D',
				'evl-black': {
					50: 'rgba(44, 39, 36, 0.05)',
					100: 'rgba(44, 39, 36, 0.1)',
					250: 'rgba(44, 39, 36, 0.25)',
					500: 'rgba(44, 39, 36, 0.5)',
					750: 'rgba(44, 39, 36, 0.75)',
					800: '#1A2631',
					850: '#1D292E',
					900: '#2C2724',
				},
				'evl-white': {
					50: 'rgba(255, 255, 255, 0.5)',
					100: '#F3F2F1',
					200: '#e6e6e6',
					300: '#f9fafb',
					400: '#fafafa',
					750: 'rgba(255, 255, 255, 0.75)',
				},
				'gyj-red': '#FE2D0F',
			},
		},
	},
	plugins: [],
};
