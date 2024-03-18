/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@iconify/iconify').plugin
  ],
}

const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/*.html'],
   plugins: [
       // Iconify plugin
       addDynamicIconSelectors(),
   ],
};