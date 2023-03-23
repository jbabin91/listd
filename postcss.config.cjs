/* eslint-disable @typescript-eslint/no-var-requires */
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const config = {
  plugins: [
    // Some plugins, like tailwindcss/nesting, need to run before tailwindcss
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    tailwindcss(),
    autoprefixer,
  ],
};

module.exports = config;
