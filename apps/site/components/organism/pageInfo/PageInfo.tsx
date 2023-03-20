import Link from 'next/link'
import React from 'react'

const PageInfo = () => {
   return (
      <div className="py-4 bg-base-100 text-center font-work">
         <h1 className="text-base-content text-3xl font-semibold">
            Page Title
         </h1>
         <div className="text-base breadcrumbs text-base-content/80 font-work mt-2 flex items-center justify-center">
            <ul>
               <li>
                  <Link
                     href={`/`}
                     className="hover:text-primary transition hover:duration-300 font-medium"
                  >
                     Home
                  </Link>
               </li>
               <li>
                  <span className="text-base-content/60 font-normal">
                     Link One
                  </span>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default PageInfo
