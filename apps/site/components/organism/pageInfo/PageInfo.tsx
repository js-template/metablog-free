import Link from 'next/link'
import React from 'react'

const PageInfo = () => {
   return (
      <div className="py-4 bg-base-100 text-center font-work">
         <h1 className="text-base-content text-3xl font-semibold">
            Page TItle
         </h1>
         <div className="text-base breadcrumbs text-base-content/80 mt-2 flex items-center justify-center">
            <ul>
               <li>
                  <Link
                     href={`/`}
                     className="hover:text-primary transition hover:duration-300"
                  >
                     Home
                  </Link>
               </li>
               <li>
                  <Link
                     href={`#`}
                     className="hover:text-primary transition hover:duration-300"
                  >
                     Link One
                  </Link>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default PageInfo
