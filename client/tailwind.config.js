/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        main:"#7A1CAC"
      },
      colors:{
        main:"#FEFAE0",
        hover:"#96CEB4"
      }
    },
  },
  plugins: [],
}