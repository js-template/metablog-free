'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { headerData } from '@/data/headerData'
import useMode from '@/utils/themeMode'
import SidebarLayout from './SidebarLayout'

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
                           <Link
                              href={item.link}
                              className="link link-hover text-base text-base-content/80 hover:text-primary transition hover:duration-300"
                           >
                              {item.name}
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
                        className="outline-none text-neutral bg-base-200 w-28"
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

                  {/* Multi themes switcher */}
                  {/*<div className="flex-none">*/}
                  {/*   <div className="dropdown dropdown-end">*/}
                  {/*      <label*/}
                  {/*         tabIndex={0}*/}
                  {/*         className="btn btn-ghost btn-circle avatar"*/}
                  {/*      >*/}
                  {/*         <div className="w-7 rounded-full">*/}
                  {/*            <svg*/}
                  {/*               stroke="currentColor"*/}
                  {/*               fill="none"*/}
                  {/*               strokeWidth="0"*/}
                  {/*               viewBox="0 0 15 15"*/}
                  {/*               className="w-7 h-7 text-base-content"*/}
                  {/*               xmlns="http://www.w3.org/2000/svg"*/}
                  {/*            >*/}
                  {/*               <path*/}
                  {/*                  fillRule="evenodd"*/}
                  {/*                  clipRule="evenodd"*/}
                  {/*                  d="M3 9C3 6.5 4.5 4.25 7.5 1.5C10.5 4.25 12 6.5 12 9C12 11.4853 9.98528 13.5 7.5 13.5C5.01472 13.5 3 11.4853 3 9ZM10.9524 8.30307C9.67347 7.82121 8.2879 8.46208 6.98956 9.06259C5.9327 9.55142 4.93365 10.0135 4.09695 9.82153C4.03357 9.55804 4 9.28294 4 9C4 7.11203 5.02686 5.27195 7.5 2.87357C9.66837 4.97639 10.725 6.65004 10.9524 8.30307Z"*/}
                  {/*                  fill="currentColor"*/}
                  {/*               />*/}
                  {/*            </svg>*/}
                  {/*         </div>*/}
                  {/*      </label>*/}
                  {/*      <ul*/}
                  {/*         tabIndex={0}*/}
                  {/*         className="grid dropdown-content p-3 shadow-lg mt-5 bg-base-200 rounded-lg w-52 max-h-80 overflow-x-auto"*/}
                  {/*      >*/}
                  {/*         {themes.map((item) => (*/}
                  {/*            <li*/}
                  {/*               data-theme={item}*/}
                  {/*               key={item}*/}
                  {/*               className={`capitalize w-full flex mb-2 rounded-md last-of-type:mb-0 justify-between items-center px-2 py-2 hover:bg-base-300 transition-all duration-300 cursor-pointer`}*/}
                  {/*               onClick={() => {*/}
                  {/*                  setTheme(item)*/}
                  {/*               }}*/}
                  {/*            >*/}
                  {/*               <span className="text-base-content flex items-center gap-2">*/}
                  {/*                  {hydrationError && theme === item && (*/}
                  {/*                     <svg*/}
                  {/*                        xmlns="http://www.w3.org/2000/svg"*/}
                  {/*                        width="16"*/}
                  {/*                        height="16"*/}
                  {/*                        viewBox="0 0 24 24"*/}
                  {/*                        fill="currentColor"*/}
                  {/*                        className="w-3 h-3 text-primary"*/}
                  {/*                     >*/}
                  {/*                        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>*/}
                  {/*                     </svg>*/}
                  {/*                  )}*/}
                  {/*                  {item}*/}
                  {/*               </span>*/}
                  {/*               <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">*/}
                  {/*                  <div className="bg-primary w-2 rounded"></div>{' '}*/}
                  {/*                  <div className="bg-secondary w-2 rounded"></div>{' '}*/}
                  {/*                  <div className="bg-accent w-2 rounded"></div>{' '}*/}
                  {/*                  <div className="bg-neutral w-2 rounded"></div>*/}
                  {/*               </div>*/}
                  {/*            </li>*/}
                  {/*         ))}*/}
                  {/*      </ul>*/}
                  {/*   </div>*/}
                  {/*</div>*/}

                  {/* Responsive Sidebar Menu */}
                  <svg
                     onClick={() => setSidebarOpen(!sidebarOpen)}
                     className="cursor-pointer w-8 h-8 xl:hidden text-neutral"
                     width="20"
                     height="20"
                     viewBox="0 0 20 20"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M3.33301 5H16.6663M3.33301 10H16.6663M3.33301 15H16.6663"
                        stroke="currentColor"
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
