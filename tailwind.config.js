/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{js,ts,jsx,tsx}",
	  "./pages/**/*.{js,ts,jsx,tsx}",
	  "./components/*.{js,ts,jsx,tsx}",
    "./containers/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "hero": "var(--font-hero)",
        "main": "var(--font-main)",
       },
      backgroundImage: {
       'mainBG': "linear-gradient(rgb(0 0 0 / 0.3),rgb(0 0 0 / 0.7)), url('/hero_bg.jpeg')",
      }
    },
  },
  plugins: [],
}
