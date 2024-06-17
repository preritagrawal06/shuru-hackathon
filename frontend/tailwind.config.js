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
        'theme':'#17bdd3'
      }
    },
  },
  plugins: [],
}