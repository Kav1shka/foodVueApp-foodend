{import('tailwindcss').Config}

//const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files:["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
  "./node_modules/flowbite/**/*.{js,jsx,ts,tsx,vue}",
  'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}'],},
safelist: [
  '!duration-[0ms]',
  '!delay-[0ms]',
  'html.js :where([class*="taos:"]:not(.taos-init))'
],

  theme: {
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("daisyui"),
   require("@tailwindcss/aspect-ratio"),
   require('flowbite/plugin'),
   require('tailwindcss-animated'),
   require('taos/plugin'),
          ]
         

}