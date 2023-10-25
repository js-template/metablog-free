'use client'
import React from 'react'
import Link from 'next/link'
import { headerData } from '@/data/headerData'
import useMode from '@/utils/themeMode'
import MobileNav from './MobileNav'
import Image from 'next/image'
import Lottie from 'react-lottie'

/**
 * Our Header is a reusable UI component that used to represent top navbar section of any website.
 *
 * @property website logo, all page title with navigation link, search field  and a theme changing button.
 *
 * @returns React component that can be easily integrated into any web application.
 */
const Header = () => {
   const { theme, setTheme, themes, hydrationError } = useMode()
   const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: require('@/public/home.json'),
      rendererSettings: {
         preserveAspectRatio: 'xMidYMid slice',
      },
   }
   const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false)

   return (
      <header className="py-0 sticky z-50 top-0 bg-base-100 shadow-xl">
         <div className="container mx-auto font-work">
            <div className="navbar grid grid-cols-12">
               <div className="col-span-3">
                  <Link href={`/`} legacyBehavior>
                     <Image
                        src={'/laugau.png'}
                        alt="Logo"
                        width={168}
                        height={128}
                        className="cursor-pointer hover:scale-150 hover:rotate-[360deg] duration-700"
                     />
                  </Link>
               </div>
               <nav className="hidden xl:block col-span-6">
                  <div className=" w-full flex items-center justify-center gap-10">
                     {headerData.map((item: any, index: number) => (
                        <div key={index}>
                           <Link
                              href={item.link}
                              className="flex items-center text-base text-base-content/80 hover:text-primary transition duration-500 hover:font-semibold hover:scale-125"
                              // legacyBehavior
                           >
                              <Lottie
                                 options={{
                                    loop: true,
                                    autoplay: true,
                                    animationData: require(`@/public/${item.icon}`),
                                    rendererSettings: {
                                       preserveAspectRatio: 'xMidYMid slice',
                                    },
                                 }}
                                 height={item.height}
                                 width={item.width}
                              />
                              {item.name}
                           </Link>
                        </div>
                     ))}
                  </div>
               </nav>
               <div className="flex items-center justify-end xl:justify-center gap-10 col-span-9 xl:col-span-3">
                  {/* Search Block */}
                  <div className="bg-base-200 pl-4 pr-3 py-2 rounded-md hidden sm:flex items-center gap-4">
                     <input
                        type="text"
                        className="outline-none text-base-content bg-base-200 w-28 placeholder:font-work"
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
                  {/*<input*/}
                  {/*   type="checkbox"*/}
                  {/*   className={`toggle rounded-full ${*/}
                  {/*      !lightMode ? 'toggle-primary' : ''*/}
                  {/*   }`}*/}
                  {/*   onClick={() => {*/}
                  {/*      if (theme === 'light') {*/}
                  {/*         setTheme('dark')*/}
                  {/*      } else {*/}
                  {/*         setTheme('light')*/}
                  {/*      }*/}
                  {/*   }}*/}
                  {/*   defaultChecked={theme === 'dark'}*/}
                  {/*/>*/}

                  {/*Multi themes switcher */}
                  <div className="flex-none">
                     <div className="dropdown dropdown-end">
                        <label
                           tabIndex={0}
                           className="btn btn-ghost btn-circle avatar"
                        >
                           <div className="w-7 rounded-full">
                              <svg
                                 stroke="currentColor"
                                 fill="currentColor"
                                 strokeWidth="0"
                                 viewBox="0 0 512 512"
                                 className="w-7 h-7 text-base-content"
                                 height="1em"
                                 width="1em"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path d="M441 336.2l-.06-.05c-9.93-9.18-22.78-11.34-32.16-12.92l-.69-.12c-9.05-1.49-10.48-2.5-14.58-6.17-2.44-2.17-5.35-5.65-5.35-9.94s2.91-7.77 5.34-9.94l30.28-26.87c25.92-22.91 40.2-53.66 40.2-86.59s-14.25-63.68-40.2-86.6c-35.89-31.59-85-49-138.37-49C223.72 48 162 71.37 116 112.11c-43.87 38.77-68 90.71-68 146.24s24.16 107.47 68 146.23c21.75 19.24 47.49 34.18 76.52 44.42a266.17 266.17 0 0086.87 15h1.81c61 0 119.09-20.57 159.39-56.4 9.7-8.56 15.15-20.83 15.34-34.56.21-14.17-5.37-27.95-14.93-36.84zM112 208a32 32 0 1132 32 32 32 0 01-32-32zm40 135a32 32 0 1132-32 32 32 0 01-32 32zm40-199a32 32 0 1132 32 32 32 0 01-32-32zm64 271a48 48 0 1148-48 48 48 0 01-48 48zm72-239a32 32 0 1132-32 32 32 0 01-32 32z"></path>
                              </svg>
                           </div>
                        </label>
                        <ul
                           tabIndex={0}
                           className="grid dropdown-content p-3 shadow-lg mt-5 bg-base-200 rounded-lg w-52 max-h-80 overflow-x-auto"
                        >
                           {themes.map((item) => (
                              <li
                                 data-theme={item}
                                 key={item}
                                 className={`capitalize w-full flex mb-2 rounded-md last-of-type:mb-0 justify-between items-center px-2 py-2 hover:bg-base-300 transition-all duration-300 cursor-pointer`}
                                 onClick={() => {
                                    setTheme(item)
                                 }}
                              >
                                 <span className="text-base-content flex items-center gap-2">
                                    {hydrationError && theme === item && (
                                       <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          viewBox="0 0 24 24"
                                          fill="currentColor"
                                          className="w-3 h-3 text-primary"
                                       >
                                          <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                                       </svg>
                                    )}
                                    {item}
                                 </span>
                                 <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                                    <div className="bg-primary w-2 rounded"></div>{' '}
                                    <div className="bg-secondary w-2 rounded"></div>{' '}
                                    <div className="bg-accent w-2 rounded"></div>{' '}
                                    <div className="bg-neutral w-2 rounded"></div>
                                 </div>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>

                  {/* Responsive Sidebar Menu */}
                  <svg
                     onClick={() => setSidebarOpen(!sidebarOpen)}
                     className="cursor-pointer w-8 h-8 xl:hidden text-base-content"
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
            <MobileNav
               sidebarOpen={sidebarOpen}
               setSidebarOpen={setSidebarOpen}
            />
         </div>
      </header>
   )
}

// Site Favicon svg component
export const Favicon = ({ ...props }) => (
   <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
   >
      <path
         d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 29.536 1.87437 34.6342 5.0231 38.6946L10.314 18.7066C12.5156 10.0312 18.2343 5.543 27.4155 5.543H30.5814C37.038 5.543 41.78 11.6041 40.2264 17.871C39.9478 18.995 39.427 20.0446 38.7004 20.9463L36.006 24.2898C35.3146 25.1478 35.0625 26.279 35.3239 27.3494L36.1453 30.7118C36.5704 32.4521 36.4927 34.2773 35.9213 35.9752C33.9775 41.751 28.5636 45.6413 22.4695 45.6413H13.6115C16.755 47.153 20.2786 48 24 48Z"
         fill="currentColor"
      />
      <path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M23.6 29.0123H18.9242C17.4329 29.0123 16.1291 30.018 15.7505 31.4604L13.9165 38.4472H21.1614C23.8415 38.4472 26.1845 36.6398 26.865 34.0476L27.0222 33.4487C27.611 31.2057 25.919 29.0123 23.6 29.0123ZM22.2195 31.1351H19.6787C18.8274 31.1351 18.083 31.7086 17.8658 32.5317L16.8649 36.3243H20.871C22.353 36.3243 23.6486 35.3303 24.0248 33.9045L24.1118 33.5752C24.4373 32.3415 23.5017 31.1351 22.2195 31.1351Z"
         fill="currentColor"
      />
      <path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M19.9962 15.657C20.3748 14.2145 21.6786 13.2088 23.1699 13.2088H27.8457C30.1647 13.2088 31.8566 15.4023 31.2679 17.6452L31.1107 18.2441C30.4302 20.8364 28.0872 22.6437 25.4071 22.6437H18.1622L19.9962 15.657ZM22.1115 16.7282C22.3287 15.9052 23.0731 15.3317 23.9244 15.3317H26.4652C27.7474 15.3317 28.683 16.5381 28.3575 17.7717L28.2705 18.1011C27.8943 19.5268 26.5987 20.5209 25.1167 20.5209H21.1106L22.1115 16.7282Z"
         fill="currentColor"
      />
   </svg>
)
export default Header
