import { headerData } from '@/data/headerData'
import Link from 'next/link'
import React from 'react'

interface SidebarLayoutProps {
   sidebarOpen: boolean
   setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SidebarLayout = ({ sidebarOpen, setSidebarOpen }: SidebarLayoutProps) => {
   return (
      <nav>
         <div className="block xl:hidden">
            <div
               className={`overflow-y-auto z-40 flex pt-5 top-0 flex-col h-screen w-full max-w-[300px] fixed bg-base-200  duration-500 ease-in  gap-2 md:gap-0 shadow-xl ${
                  sidebarOpen ? 'left-0' : '-left-full'
               }`}
            >
               <div className="relative flex flex-col gap-5 px-5 pb-6 mt-4 text-lg font-normal leading-6">
                  <div className="flex items-center justify-between mb-6">
                     <h4 className="text-base text-base-content/80">Menu</h4>
                     <svg
                        className="cursor-pointer"
                        onClick={() => setSidebarOpen(!open)}
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M1 9L9 1M1 1L9 9"
                           stroke="#6B7280"
                           strokeWidth="1.5"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        />
                     </svg>
                  </div>
                  {/*  search box */}
                  <div className="px-2 py-2 rounded-md flex items-center gap-4 border sm:hidden">
                     <input
                        type="text"
                        className="outline-none text-base w-full bg-secondary-content text-neutral"
                        placeholder="Search"
                     />
                     <svg
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
                  {/*  menu lists */}
                  {headerData.map((item: any, index: number) => (
                     <Link
                        href={item.link}
                        key={index}
                        className="link link-hover text-base text-base-content/80 hover:text-primary transition hover:duration-300"
                     >
                        {item.name}
                     </Link>
                  ))}
               </div>
            </div>
         </div>
         {/* bg overlay */}
         <div
            className={`xl:hidden fixed top-0 z-30 transition-all duration-500 ease-in-out bg-[#1B2631] opacity-80 h-full w-full ${
               sidebarOpen ? 'left-0' : '-left-full'
            }`}
            onClick={() => setSidebarOpen(false)}
         />
      </nav>
   )
}

export default SidebarLayout
