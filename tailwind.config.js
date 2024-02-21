/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        'primary':['Nunito', 'sans-serif'],
        'secondary':['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

