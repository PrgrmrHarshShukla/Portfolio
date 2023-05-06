/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    maxWidth: {
      '7xl': '200px',
      '9xl': '400px',
    },
    extend: {},
  },
  plugins: [],
}