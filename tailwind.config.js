/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", //Colocar essa parte manualmente para afetar no html e js dentro da past src
    "./**/*.html" //Colocar essa parte manualmente para afetar todo html do projeto
  ], 
  theme: {
    extend: {},
  },
  plugins: [],
}

