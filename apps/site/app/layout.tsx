'use client'
import './globals.css'
import React from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { GlobalProvider } from '@/context/store'
import { Providers } from './providers'

const Jakarta_Sans = Plus_Jakarta_Sans({
   weight: ['400', '500', '600', '700'],
   style: ['normal', 'italic'],
   subsets: ['latin'],
   display: 'swap',
   variable: '--font-plus-jakarta-sans',
})

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
   return (
      <html
         lang="en"
         className={`${Jakarta_Sans.variable} font-sans`}
         suppressHydrationWarning
      >
         <body>
            <Providers>{children}</Providers>
         </body>
      </html>
   )
}
