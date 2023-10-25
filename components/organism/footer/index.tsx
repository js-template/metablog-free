import { FooterDataOne, FooterDataTwo } from '@/data/footerData'
import Link from 'next/link'
import React from 'react'
import NewsLetter from '@/components/molecules/newsletter/NewsLetter'
import useMode from '@/utils/themeMode'
import { Favicon } from '@/components/organism/header'
import Image from 'next/image'

import fbLogo from '@/public/facebook.svg'
import envelopeLogo from '@/public/envelope-solid.svg'
import linkLogo from '@/public/link-solid.svg'  
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
                     Tụi mình là nhóm Powerpuff Girls đến từ KNP003.<br></br>
                     <br></br>
                     Trang web được tạo ra phần là dự án kết thúc học phần môn
                     Design Thinking và phần là mong muốn được giúp mọi người
                     tiếp cận với kiến thức môn Văn một cách dễ dàng và thuận
                     tiện hơn với kinh nghiệm của bản thân.<br></br>
                     <br></br>
                     GHVD: Cô Đỗ Thị Kim Thanh.
                  </p>
                  <div>
                     <a
                        href="buffvancungpowerpuffgirls@gmail.com"
                        className="font-semibold text-base-content text-base"
                     >
                        Email :{' '}
                        <span className="text-base-content/70 font-normal hover:text-primary hover:duration-300 transition">
                           buffvancungpowerpuffgirls@gmail.com
                        </span>
                     </a>
                     <div className="flex gap-3 my-4">
                        <div className="rounded-full bg-primary hover:scale-125 flex justify-center items-center p-2">
                           <Link
                              href="https://www.facebook.com/puffvancungpowerpuffgirls"
                              rel="noopener noreferrer"
                              target="_blank"
                           >
                              <Image
                                 src={fbLogo}
                                 alt="Facebook Logo"
                                 height={20}
                                 width={20}
                              />
                           </Link>
                        </div>
                        <div className="rounded-full bg-primary hover:scale-125 flex justify-center items-center p-2">
                           <Link
                              href="https://forms.gle/TFoZib75AkZAVWMk7"
                              rel="noopener noreferrer"
                              target="_blank"
                           >
                              <Image
                                 src={envelopeLogo}
                                 alt="Mail Logo"
                                 height={20}
                                 width={20}
                              />
                           </Link>
                        </div>
                        <div className="rounded-full bg-primary hover:scale-125 flex justify-center items-center p-2">
                           <Link
                              href="https://forms.gle/iYxSP3APiTMEsX9d9"
                              rel="noopener noreferrer"
                              target="_blank"
                           >
                              <Image
                                 src={linkLogo}
                                 alt="Link Logo"
                                 height={20}
                                 width={20}
                              />
                           </Link>
                        </div>
                     </div>
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
                                 legacyBehavior
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
                                 legacyBehavior
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
                     {/* <Favicon className={`text-base-content`} /> */}
                     <Image
                        src={'/lg2.png'}
                        alt="Logo"
                        width={128}
                        height={32}
                        className="cursor-pointer"
                     />
                  </Link>
                  <div>
                     <h4 className="text-xl text-base-content font-sans">
                        POWER<strong>BLOG</strong>
                     </h4>
                     <p className="mt-0.5 text-base-content/70 text-base">
                        © Buff Văn cùng Powerpuff Girls 2023, All Rights
                        Reserved.
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
