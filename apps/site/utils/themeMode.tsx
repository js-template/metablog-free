import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const useMode = () => {
   const { themes, theme, setTheme } = useTheme()
   const [lightMode, setLightMode] = useState(true)

   useEffect(() => {
      if (theme === 'light') {
         setLightMode(true)
      } else if (theme === 'dark') {
         setLightMode(false)
      }
   }, [theme])

   return { lightMode, themes, theme, setTheme }
}
export default useMode
