/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mvmt': '#EDEDED',
        'mvmt-text-dark-blue': '#3676B4',
        'mvmt-text-light-blue': '#7AD0E4',
        'mvmt-text-black': '#0A0203'
      },

      animation: {
        fadeIn: 'fadeIn 0.75s ease-in',
        fadeOut: 'fadeOut 0.75s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 }
        }
      },
    },
  },
  plugins: [],
}

