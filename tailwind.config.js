/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      signFont: ['Cabin Sketch', 'sans - serif'],
    },
    backgroundImage: {
      'wood-pattern': "url('../postboard.png')",
      'paper-background': "url('../paper.png')",
      'sign-background': "url('../metal.png')",
    },
    colors: {
      crimson: '#d7263d',
      giantOrange: '#F46036',
      spaceCadet: '#2e294e',
      persianGreen: '#1B998B',
      mindaro: '#C5D86D',
      whiteTest: '#FFFFFF',
      black: '#000000',
    },
    extend: {},
  },
  plugins: [],
};
