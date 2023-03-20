import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const useMode = () => {
   const { themes, theme, setTheme } = useTheme()
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

   return { lightMode, themes, theme, setTheme, hydrationError }
}
export default useMode
