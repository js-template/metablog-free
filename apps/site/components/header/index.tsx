'use client'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const Header = () => {
   const { themes, theme, setTheme } = useTheme()

   /*
     Fixed the hydration issue by using a state to check if the component is mounted
   */
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)
   }, [])

   return (
      <div className="shadow-md py-2">
         <div className="container mx-auto px-4">
            <div className="navbar bg-base-100">
               <div className="flex-1">
                  <a className="btn btn-ghost normal-case text-xl">
                     Daisy Setup
                  </a>
               </div>
               <div className="flex-none">
                  <div className="dropdown dropdown-end">
                     <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                     >
                        <div className="w-7 rounded-full">
                           <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth="0"
                              viewBox="0 0 15 15"
                              className="w-7 h-7 text-base-content"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 fillRule="evenodd"
                                 clipRule="evenodd"
                                 d="M3 9C3 6.5 4.5 4.25 7.5 1.5C10.5 4.25 12 6.5 12 9C12 11.4853 9.98528 13.5 7.5 13.5C5.01472 13.5 3 11.4853 3 9ZM10.9524 8.30307C9.67347 7.82121 8.2879 8.46208 6.98956 9.06259C5.9327 9.55142 4.93365 10.0135 4.09695 9.82153C4.03357 9.55804 4 9.28294 4 9C4 7.11203 5.02686 5.27195 7.5 2.87357C9.66837 4.97639 10.725 6.65004 10.9524 8.30307Z"
                                 fill="currentColor"
                              />
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
                              <div className="text-base-content flex items-center gap-2">
                                 {mounted && theme === item && (
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
                                 <span>{item}</span>
                              </div>
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
            </div>
         </div>
      </div>
   )
}

export default Header
