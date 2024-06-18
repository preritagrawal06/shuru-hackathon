/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-secondary": "#f5f5f5",
        "theme-500": "#17bdd3",
        "theme-600": "#118fa0",
      },
      width:{
        "400":'400px',
        "500":"500px"
      }
    },
  },
  plugins: [],
};
