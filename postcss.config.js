const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./**/*.html', './**/*.svelte'],
  whitelistPatterns: [/svelte-/],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-import'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
    }),
    ...(prod ? [require('cssnano'), purgecss] : []),
  ],
};
