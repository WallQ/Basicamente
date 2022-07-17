module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#005cab",
				secondary: "#00accd",
			},
			fontFamily: {
				poppins: ["Poppins"],
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
