/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        // xs: '450px', // możesz usunąć stary lub zostawić
        xs: '520px',         // w px
        // xs: '32.5rem',    // odpowiednik w rem, jeśli wolisz
      },
    },
  },
  plugins: [],
}