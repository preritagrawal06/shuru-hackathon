/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'light-secondary':'#f5f5f5',
        'theme-500':'#17bdd3',
        'theme-600':'#118fa0'
      }
    },
  },
  plugins: [],
}