/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#F17600",
        backup: '#0239b0'
      },
    },
  },
  plugins: [],
}

