'use client'

import { ThemeProvider } from 'next-themes'
import React from 'react'

type props = {
   children: React.ReactNode
}

export function Providers({ children }: props) {
   return (
      <ThemeProvider themes={['light', 'dark']} enableSystem={false}>
         {children}
      </ThemeProvider>
   )
}
