/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Mono'],
      },
      colors: {
        primary: 'hsl(172, 67%, 45%)',
        secondary: {
          verydarkcyan: 'hsl(183, 100%, 15%)',
          darkgraycyan: 'hsl(186, 14%, 43%)',
          graycyan: 'hsl(184, 14%, 56%)',
          lightgraycyan: 'hsl(185, 41%, 84%)',
          verylightgraycyan: 'hsl(189, 41%, 97%)',
        },
      },
    },
  },
  plugins: [],
};
