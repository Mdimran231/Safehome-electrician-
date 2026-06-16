/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Safe Home ke premium brand colors yahan define hain
        // Bright Warning/Electrical Yellow color
      },
    },
  },
  plugins: [],
}