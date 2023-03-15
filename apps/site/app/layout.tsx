'use client'
import { GlobalProvider, useGlobalContext } from '@/context/store'
import './globals.css'

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <GlobalProvider>
         <Body>{children}</Body>
      </GlobalProvider>
   )
}

const Body = ({ children }: { children: React.ReactNode }) => {
   const { theme } = useGlobalContext()
   return (
      <html lang="en" data-theme={theme}>
         <body>{children}</body>
      </html>
   )
}
