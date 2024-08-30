/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pink-blue-gradient': 'linear-gradient(to right, #FFC0CB, #ADD8E6)'
      },
    },
  },
  plugins: [],
}