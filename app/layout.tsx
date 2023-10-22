'use client'
import './globals.css'
import React from 'react'
import {
   Plus_Jakarta_Sans,
   Source_Serif_4,
   Source_Code_Pro,
   Work_Sans,
} from 'next/font/google'
import { GlobalProvider } from '@/context/store'
import Header from '@/components/organism/header'
import Footer from '@/components/organism/footer'
import { Providers } from '@/utils/themeMode' // Plus Jakarta Sans font family with 4 weights and 2 styles
import Script from 'next/script'

// Plus Jakarta Sans font family with 4 weights and 2 styles
const Jakarta_Sans = Plus_Jakarta_Sans({
   weight: ['400', '500', '600', '700'],
   style: ['normal', 'italic'],
   subsets: ['latin'],
   display: 'swap',
   variable: '--font-plus-jakarta-sans',
})

// Work Sans font family with 4 weights and 2 styles
const work_Sans = Work_Sans({
   weight: ['400', '500', '600', '700'],
   style: ['normal', 'italic'],
   subsets: ['latin'],
   display: 'swap',
   variable: '--font-work-sans',
})

// Source Serif Pro font family with 4 weights and 2 styles
const source_Serif_Pro = Source_Code_Pro({
   weight: ['200', '300', '400', '600', '700'],
   style: ['normal', 'italic'],
   subsets: ['latin'],
   display: 'swap',
   variable: '--font-source-serif-pro',
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
         className={`${source_Serif_Pro.variable} ${Jakarta_Sans.variable} ${work_Sans.variable} font-sans`}
      >
         <body>
            <Providers>
               <GlobalProvider>
                  <div id="fb-root"></div>
                  <div id="fb-customer-chat" className="fb-customerchat"></div>
                  <Header />
                  {children}
                  <Footer />

                  <Script id="my-script" strategy="lazyOnload">
                     {`
                     var chatbox = document.getElementById('fb-customer-chat');
                     chatbox.setAttribute("page_id", "141362319064958");
                     chatbox.setAttribute("attribution", "biz_inbox");
               
                     window.fbAsyncInit = function() {
                       FB.init({
                         xfbml            : true,
                         version          : 'v18.0'
                       });
                     };
               
                     (function(d, s, id) {
                       var js, fjs = d.getElementsByTagName(s)[0];
                       if (d.getElementById(id)) return;
                       js = d.createElement(s); js.id = id;
                       js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
                       fjs.parentNode.insertBefore(js, fjs);
                     }(document, 'script', 'facebook-jssdk'));
                   `}
                  </Script>
               </GlobalProvider>
            </Providers>
         </body>
      </html>
   )
}
