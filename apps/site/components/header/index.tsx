'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { headerData } from '@/data/headerData'
import useMode from '@/utils/themeMode'
import SidebarLayout from '../SidebarLayout/SidebarLayout'

const Header = () => {
   const { lightMode, theme, setTheme } = useMode()

   const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false)

   return (
      <div className="py-5">
         <div className="container mx-auto">
            <div className="navbar grid grid-cols-12">
               <div className="col-span-3">
                  {lightMode ? (
                     <Link href="/">
                        <Image
                           src="/logoLight.png"
                           alt="site-logo"
                           width={158}
                           height={36}
                           priority={true}
                        />
                     </Link>
                  ) : (
                     <Link href="/">
                        <Image
                           src="/logoDark.png"
                           alt="site-logo"
                           width={158}
                           height={36}
                           priority={true}
                        />
                     </Link>
                  )}
               </div>
               <div className="hidden xl:block col-span-6">
                  <div className=" w-full flex items-center justify-center gap-10">
                     {headerData.map((item: any, index: number) => (
                        <div key={index}>
                           <Link href={item.link}>
                              <p className="link link-hover text-base text-neutral hover:text-primary transition hover:duration-300">
                                 {item.name}
                              </p>
                           </Link>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="flex items-center justify-end xl:justify-center gap-10 col-span-9 xl:col-span-3">
                  {/* Search Block */}
                  <div className="bg-base-200 pl-4 pr-3 py-2 rounded-md hidden sm:flex items-center gap-4">
                     <input
                        type="text"
                        className=" outline-none text-neutral bg-base-200 w-28"
                        placeholder="Search"
                     />
                     <div>
                        <svg
                           className="cursor-pointer"
                           width="16"
                           height="16"
                           viewBox="0 0 16 16"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M6.90906 2C5.93814 2 4.98903 2.28791 4.18174 2.82733C3.37444 3.36674 2.74524 4.13343 2.37368 5.03045C2.00213 5.92746 1.90491 6.91451 2.09433 7.86677C2.28375 8.81904 2.75129 9.69375 3.43783 10.3803C4.12438 11.0668 4.99909 11.5344 5.95135 11.7238C6.90362 11.9132 7.89067 11.816 8.78768 11.4444C9.6847 11.0729 10.4514 10.4437 10.9908 9.63639C11.5302 8.8291 11.8181 7.87998 11.8181 6.90906C11.818 5.60712 11.3008 4.35853 10.3802 3.43792C9.45959 2.51731 8.211 2.00008 6.90906 2Z"
                              stroke="#52525B"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                           />
                           <path
                              d="M10.5715 10.5716L14 14"
                              stroke="#52525B"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                           />
                        </svg>
                     </div>
                  </div>
                  {/* Theme Switcher */}
                  <input
                     type="checkbox"
                     className={`toggle rounded-full ${
                        !lightMode ? 'toggle-primary' : ''
                     }`}
                     onClick={() => {
                        if (theme === 'light') {
                           setTheme('dark')
                        } else {
                           setTheme('light')
                        }
                     }}
                     defaultChecked={theme === 'dark'}
                  />
                  <svg
                     onClick={() => setSidebarOpen(!sidebarOpen)}
                     className="cursor-pointer xl:hidden"
                     width="20"
                     height="20"
                     viewBox="0 0 20 20"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M3.33301 5H16.6663M3.33301 10H16.6663M3.33301 15H16.6663"
                        stroke="#4B5563"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                  </svg>
               </div>
            </div>
            {/* Responsive Sidebar Layout */}
            <SidebarLayout
               sidebarOpen={sidebarOpen}
               setSidebarOpen={setSidebarOpen}
            />
         </div>
      </div>
   )
}

export default Header
