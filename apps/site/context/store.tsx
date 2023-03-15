'use client'
import React from 'react'

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
   const [theme, setTheme] = React.useState('light')
   const AllTheme = ['light', 'dark']

   return (
      <GlobalContext.Provider value={{ theme, setTheme, AllTheme }}>
         {children}
      </GlobalContext.Provider>
   )
}

export const useGlobalContext = () => React.useContext(GlobalContext)
