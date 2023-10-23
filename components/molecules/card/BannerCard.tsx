import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
/**
 * Our BannerCard is a reusable UI component used to display a top section of our website
 *
 * @property featured image, a heading, author name and publication date.
 *
 * @returns React component that can be easily integrated into any web application.
 */

const BannerCard = () => {
   return (
      <div className="relative rounded-xl font-work mb-24">
         <Image
            width="1920"
            height="600"
            alt={`banner_image`}
            src="/coverbanner.jpg"
            className="rounded-xl"
         />
         <div className="absolute -bottom-32 left-[40%] md:left-[50%] lg:left-[70%] rounded-xl p-4 md:p-10 bg-base-100 w-[50%] md:w-[55%] lg:w-1/3 shadow-[0_12px_24px_-6px] shadow-base-content/40 opacity-70 hover:opacity-100 float-right hover:bg-gradient-to-tr ">
            <div className="w-fit text-primary-content px-2.5 py-1 bg-primary text-xs md:text-sm rounded-md mb-4 font-medium">
               Châm ngôn
            </div>
            <h3>
               <Link
                  href="/"
                  className="text-base-content font-semibold text-xl md:text-2xl lg:text-4xl leading-5 md:leading-10 hover:text-primary transition-all hover:duration-500"
               >
                  "Văn học là nhân học" - M. Gorki
               </Link>
            </h3>
            <div className="mt-6 flex items-center gap-5">
               <div className=" flex items-center gap-3">
                  <div className="avatar">
                     <div className="w-9 rounded-full">
                        <Image
                           src="/logo.jpg"
                           alt="avatar"
                           width="100"
                           height="100"
                        />
                     </div>
                  </div>
                  <h6>
                     <Link
                        href="/"
                        className="text-base-content/60 text-xs md:text-base font-medium hover:text-primary transition hover:duration-300"
                     >
                        Nhóm Powerpuff Girls đến từ KNP003.
                     </Link>
                  </h6>
               </div>
               <p className="text-base-content/60 text-xs md:text-base">
                  {new Date().toLocaleDateString()}
               </p>
            </div>
         </div>
      </div>
   )
}

export default BannerCard
