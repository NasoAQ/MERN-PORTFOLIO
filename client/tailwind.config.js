/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "rgb(232,234,227)",
				secondary: "rgb(250,39,66)",
				tertiary: "rgb(55,56,51)",
			},
		},
		screens: {
			lg: { max: "2023px" },

			sm: { max: "1000px" },
		},
	},
	plugins: [],
};
