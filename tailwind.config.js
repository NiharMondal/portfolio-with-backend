/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{

        'dark-gray':"#333333",
        background:"#f5f5f5",
        primary:"#209CEE",
        secondary:"#ff6f61"

      },
    },
  },
  plugins: [],
}

