module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    // './src/components/About.js',
    // './src/components/AllArticles.js',
    // './src/components/AllReviews.js',
    // './src/components/ArticlePage.js',
    // './src/components/Home.js',
    // './src/components/NavBar.js',
    // './src/components/ReviewPage.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
