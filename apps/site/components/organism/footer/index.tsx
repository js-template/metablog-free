import { FooterDataOne, FooterDataTwo } from '@/data/footerData'
import Link from 'next/link'
import React from 'react'
import NewsLetter from '@/components/molecules/newsletter/NewsLetter'
import useMode from '@/utils/themeMode'
import { Favicon } from '@/components/organism/header'

/**
 * Our Footer is a reusable UI component that used to represent bottom section of any website.
 *
 * @property website details, email, phone number, some necessary link and a newsletter component.
 *
 * @returns React component that can be easily integrated into any web application.
 */

const Footer = () => {
   const { lightMode } = useMode()

   return (
      <footer className="bg-base-200 px-5 md:px-0 font-sans">
         <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-5 py-16">
               <div className="col-span-12 lg:col-span-3">
                  <h5 className="text-lg font-semibold text-base-content font-sans">
                     About
                  </h5>
                  <p className="mt-3 text-base text-base-content/70 mb-6">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam
                  </p>
                  <div>
                     <a
                        href="mailto:info@jstemplate.net"
                        className="font-semibold text-base-content text-base"
                     >
                        Email :{' '}
                        <span className="text-base-content/70 font-normal hover:text-primary hover:duration-300 transition">
                           info@jstemplate.net
                        </span>
                     </a>
                  </div>
                  <div className="mt-1">
                     <a
                        href="tel:880123456789"
                        className="font-semibold text-base-content text-base"
                     >
                        Phone :{' '}
                        <span className="text-base-content/70 font-normal hover:text-primary hover:duration-300 transition">
                           880 123 456 789
                        </span>
                     </a>
                  </div>
               </div>
               <div className="flex justify-between lg:justify-center lg:gap-20 col-span-12 lg:col-span-5">
                  <div>
                     <h5 className="text-base-content text-lg font-semibold font-sans">
                        Quick Link
                     </h5>
                     <div className="flex flex-col gap-y-2 mt-6">
                        {FooterDataOne.map((item: any, index: number) => (
                           <div key={index}>
                              <Link
                                 href={item.link}
                                 className="link link-hover text-base text-base-content/70 hover:text-primary transition hover:duration-300"
                              >
                                 {item.name}
                              </Link>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div>
                     <h5 className="text-base-content text-lg font-semibold font-sans">
                        Category
                     </h5>
                     <div className="flex flex-col gap-y-2 mt-6">
                        {FooterDataTwo.map((item: any, index: number) => (
                           <div key={index}>
                              <Link
                                 href={item.link}
                                 className="link link-hover text-base text-base-content/70 hover:text-primary transition hover:duration-300"
                              >
                                 {item.name}
                              </Link>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
               <div className="col-span-12 lg:col-span-4">
                  <NewsLetter />
               </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between py-8 bg-base-200 border-t border-base-content/10">
               <div className="flex items-center gap-2.5">
                  <Link href="/">
                     <Favicon className={`text-base-content`} />
                  </Link>
                  <div>
                     <h4 className="text-xl text-base-content font-sans">
                        Meta<strong>Blog</strong>
                     </h4>
                     <p className="mt-0.5 text-base-content/70 text-base">
                        © JS Template 2023. All Rights Reserved.
                     </p>
                  </div>
               </div>
               <div className="flex items-center gap-4 text-base-content/70">
                  <Link
                     href="/"
                     className="text-base border-r border-base-content/10 pr-4 hover:text-primary transition hover:duration-300"
                  >
                     Terms of Use
                  </Link>
                  <Link
                     href="/"
                     className="text-base border-r border-base-content/10 pr-4  hover:text-primary transition hover:duration-300"
                  >
                     Privacy Policy
                  </Link>
                  <Link
                     href="/"
                     className="text-base hover:text-primary transition hover:duration-300"
                  >
                     Cookie Policy
                  </Link>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer
