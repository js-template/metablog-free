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
            sans: ['var(--font-plus-jakarta-sans)'], // this font-family is used for the footer
            work: ['var(--font-work-sans)'], // this font-family is used for the headings
            serif: ['var(--font-source-serif-pro)'], // this font-family is used for the body like ( p, li, etc. )
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
               ...require('daisyui/src/colors/themes')['[data-theme=light]'],
               primary: '#4B6BFB',
               'primary-content': '#FFFFFF',
               'primary-focus': '#405BD5',
               secondary: '#696A75',
               'secondary-focus': '#3B3C4A',
               'secondary-content': '#FFFFFF',
               accent: '#3CC288',
               'accent-focus': '#33A574',
               'accent-content': '#FFFFFF',
               neutral: '#181A2A',
               'neutral-focus': '#141624',
               'neutral-content': '#FFFFFF',
               'base-100': '#FFFFFF',
               'base-200': '#F6F6F7',
               'base-300': '#E8E8EA',
               'base-content': '#181A2A',
               info: '#181454',
               success: '#009485',
               warning: '#ff9900',
               error: '#ff5724',
            },
         },
         {
            dark: {
               ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
               primary: '#4B6BFB',
               'primary-content': '#FFFFFF',
               'primary-focus': '#405BD5',
               secondary: '#696A75',
               'secondary-focus': '#3B3C4A',
               'secondary-content': '#FFFFFF',
               accent: '#3CC288',
               'accent-focus': '#33A574',
               'accent-content': '#FFFFFF',
               neutral: '#181A2A',
               'neutral-focus': '#141624',
               'neutral-content': '#FFFFFF',
               'base-100': '#181A2A',
               'base-200': '#141624',
               'base-300': '#E8E8EA',
               'base-content': '#DCDDDF',
               info: '#FFFFFF',
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
