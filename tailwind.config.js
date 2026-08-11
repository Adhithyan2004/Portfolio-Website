/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#FFFFFF',
        'secondary':'#7275C4',
        'blk':'#151515',
      },
      fontFamily:{
        'prime':['Jaro','sans-serif'],
        'sec':['Bebas Neue','sans-serif'],
        'cur':['Cedarville Cursive', 'cursive'],
      },
    },
  },
  plugins: [],
}