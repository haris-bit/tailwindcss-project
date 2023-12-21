/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      screens: {
        "3xl": "1680px",
        "tablet": "700px", 
      },
      colors: {
        "twitter-blue": "#1DA1F2",
      },
    },
  },
  plugins: [],
}

