/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flexBasis: {
        '1/3-calc': 'calc(33.33% - 0.4rem)',
        '1/2-calc': 'calc(50% - 0.4rem)',
      },
    },
  },
  plugins: [],
}