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
    colors: {
      crimson: '#d7263d',
      giantOrange: '#F46036',
      spaceCadet: '#2e294e',
      persianGreen: '#1B998B',
      mindaro: '#C5D86D',
      whiteTest: '#FFFFFF',
    },
    extend: {},
  },
  plugins: [],
};
