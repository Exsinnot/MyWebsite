/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'fb': '380px',
      },
      animation: {
        fade: 'fadeOut 1s ease-in-out',
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity : '0' },
          '100%': { opacity : '1' },
        },
      }),
    },

  },
  plugins: [require("daisyui")],
}
