/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '10.5/12': '90%',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateY(0%)' },
          '50%':{ transform: 'translateY(50%)' },
          '100%': { transform: 'translateY(100%)'},
        },
        active: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1'},
        },
      },
      animation: {
        wiggle: 'wiggle 2.5s linear alternate forwards',
        active: 'active 2.5s 3s linear alternate forwards',
      },
    },
  },
  plugins: [],
};
