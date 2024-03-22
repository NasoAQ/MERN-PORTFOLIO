/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#F6F4F2",
				secondary: "#AD4328",
				tertiary: "#373833",
				fourty: "#B4D0E7",
			},
		},
		screens: {
			lg: { max: "2023px" },

			sm: { max: "1000px" },
		},
	},
	plugins: [],
};
