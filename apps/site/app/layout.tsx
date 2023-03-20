'use client'
import './globals.css'
import React from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { GlobalProvider } from '@/context/store'
import { Providers } from './providers'
import Header from '@/components/header'
import Footer from '@/components/footer'

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
               <Header />
               <GlobalProvider>{children}</GlobalProvider>
               <Footer />
            </Providers>
         </body>
      </html>
   )
}

