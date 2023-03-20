import Link from 'next/link'
import React from 'react'

const PageInfo = () => {
   return (
      <div className="py-4 bg-base-100 text-center">
         <h1 className="text-base-content font-semibold text-3xl">
            Page TItle
         </h1>
         <div className="text-base breadcrumbs text-base-content/80 mt-2 flex items-center justify-center">
            <ul>
               <li>
                  <Link href={`/`}>Home</Link>
               </li>
               <li>
                  <Link href={`#`}>Link One</Link>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default PageInfo
