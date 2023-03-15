/** @type {import('tailwindcss').Config} */
module.exports = {
   mode: 'jit',
   content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
   theme: {
      extend: {},
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
               secondary: '#181A2A',
               'secondary-focus': '#2563EB',
               'secondary-content': '#ffffff',
               accent: '#37cdbe',
               'accent-focus': '#2aa79b',
               'accent-content': '#ffffff',
               natural: '#181A2A',
               'natural-content': '#E8E8EA',
               'base-100': '#FFFFFF',
               'base-200': '#F6F6F7',
               'base-300': '#E8E8EA',
               'base-content': '#97989F',
               info: '#2094f3',
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
               secondary: '#FFFFFF',
               'secondary-focus': '#2563EB',
               'secondary-content': '#ffffff',
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
