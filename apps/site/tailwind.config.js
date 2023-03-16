const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
   mode: 'jit',
   content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
   theme: {
      screens: {
         sm: '576px',
         md: '768px',
         lg: '992px',
         xl: '1216px',
      },
      extend: {
         fontFamily: {
            sans: ['var(--font-plus-jakarta-sans)', ...fontFamily.sans],
         },
         boxShadow: {
            dropShadowMd: "0px 12px 24px -6px rgba(24, 26, 42, 0.12)",
          },
      },
   },

   // add daisyUI plugin
   plugins: [require('daisyui')],

   // daisyUI config (optional)
   daisyui: {
      styled: true,
      themes: [
         {
            light: {
               ...require('daisyui/src/colors/themes')['[data-theme=corporate]']
            },
         },
         {
            dark: {
               ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
               primary: '#4B6BFB',
               'primary-content': '#FFFFFF',
               secondary: '#FFFFFF',
               'secondary-focus': '#2563EB',
               'secondary-content': '#242535',
               accent: '#37cdbe',
               'accent-focus': '#2aa79b',
               'accent-content': '#ffffff',
               natural: '#FFFFFF',
               'natural-content': '#242535',
               'base-100': '#181A2A',
               'base-200': '#141624',
               'base-300': '#242535',
               'base-content': '#97989F',
               info: '#2094f3',
               success: '#009485',
               warning: '#ff9900',
               error: '#ff5724',
            },
         },
      ],
      base: true,
      utils: true,
      logs: false,
      rtl: false,
      prefix: '',
      darkTheme: 'light',
   },
}
