'use client'
import './globals.css'
import React from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { GlobalProvider } from '@/context/store'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Providers } from '@/utils/themeMode'

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
      <html
         lang="en"
         suppressHydrationWarning
         className={`${Jakarta_Sans.variable} font-sans`}
      >
         <body>
            <Providers>
               <GlobalProvider>
                  <Header />
                  {children}
                  <Footer />
               </GlobalProvider>
            </Providers>
         </body>
      </html>
   )
}
