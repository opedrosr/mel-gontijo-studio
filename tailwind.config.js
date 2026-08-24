
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        ink: {
          900: '#292321',
          800: '#342E2B',
          700: '#403936',
        },

        cream: {
          50: '#FFFDF9',
          100: '#F7F3EE',
          200: '#E8E0D8',
        },

        salmon: {
          400: '#D9A39A',
          500: '#C98F86',
          600: '#B97870',
          700: '#A5655E',
        },

        neutral: {
          900: '#292321',
          800: '#342E2B',
          700: '#403936',
          600: '#514945',
          500: '#817873',
          400: '#A69D97',
          300: '#CFC7C0',
          200: '#E3DDD7',
          100: '#F3EFEB',
          50: '#FCFAF7',
        },
      },

      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },

      boxShadow: {
        soft: '0 20px 70px -25px rgba(41, 35, 33, 0.18)',
        card: '0 35px 100px -30px rgba(41, 35, 33, 0.22)',
      },
    },
  },

  plugins: [],
};