/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "blue-color":'#2b44e7'
      },
      colors:{
        "grey-color":"#A6ACB8"
      },
      fontSize:{
        "md":"16px"
      }
    },
  },
  plugins: [],
}

