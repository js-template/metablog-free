'use client'
import React from 'react'
import { getCookie, setCookie } from 'cookies-next'

type Props = {
   children: React.ReactNode
}

interface contextProps {
   theme: string
   setTheme: (theme: string) => void
   AllTheme: string[]
}

const GlobalContext = React.createContext<contextProps>({
   theme: 'light',
   setTheme: () => {},
   AllTheme: [],
})

export const GlobalProvider = ({ children }: Props) => {
   const [theme, setTheme] = React.useState<string>('light')
   const AllTheme = ['light', 'dark']

   // theme name is stored in cookies
   React.useEffect(() => {
      const theme = getCookie('theme') || ('light' as string)
      if (theme) {
         setTheme(theme as string)
         // set the theme in cookies
         setCookie('theme', theme as string)
      }
   }, [])

   return (
      <GlobalContext.Provider value={{ theme, setTheme, AllTheme }}>
         {children}
      </GlobalContext.Provider>
   )
}

export const useGlobalContext = () => React.useContext(GlobalContext)
