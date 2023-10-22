'use client'
import React, { useEffect, useState } from 'react'
import { ThemeProvider, useTheme } from 'next-themes'

type Props = {
   children: React.ReactNode
}

export function Providers({ children }: Props) {
   return (
      <ThemeProvider
         themes={[
            'light',
            'dark',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula',
            'cmyk',
            'autumn',
            'business',
            'acid',
            'lemonade',
            'night',
            'coffee',
            'winter',
         ]}
         enableSystem={false}
      >
         {children}
      </ThemeProvider>
   )
}

const useMode = () => {
   const { themes, theme, setTheme, forcedTheme, systemTheme, resolvedTheme } =
      useTheme()
   const [lightMode, setLightMode] = useState(true)
   const [hydrationError, setHydrationError] = useState(false)

   useEffect(() => {
      if (theme === 'light') {
         setLightMode(true)
      } else if (theme === 'dark') {
         setLightMode(false)
      }
   }, [theme])

   // fix hydration error on next-themes
   useEffect(() => {
      setHydrationError(true)
   }, [])

   return {
      lightMode,
      themes,
      theme,
      setTheme,
      forcedTheme,
      systemTheme,
      resolvedTheme,
      hydrationError,
   }
}
export default useMode
