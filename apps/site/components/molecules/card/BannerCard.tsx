import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BannerCard = () => {
   return (
      <section>
         <div className="relative rounded-xl font-work">
            <Image
               width="1216"
               height="600"
               alt={`banner_image`}
               src="/image1.png"
            />
            <div className="absolute -bottom-16 left-4 md:left-14 rounded-xl p-4 md:p-10 bg-base-100 w-10/12 md:w-7/12 lg:w-6/12 shadow-[0_12px_24px_-6px] shadow-base-content/20">
               <div className="w-fit text-white px-2.5 py-1 bg-primary text-xs md:text-sm rounded-md mb-4">
                  Technology
               </div>
               <h3>
                  <Link
                     href="/"
                     className="text-base-content font-semibold text-xl md:text-2xl lg:text-4xl leading-5 md:leading-10 hover:text-primary transition-all hover:duration-500"
                  >
                     The Impact of Technology on the Workplace: How Technology
                     is Changing
                  </Link>
               </h3>
               <div className="mt-6 flex items-center gap-5">
                  <div className=" flex items-center gap-3">
                     <div className="avatar">
                        <div className="w-9 rounded-full">
                           <img src="/image1.png" alt={`avatar_image`} />
                        </div>
                     </div>
                     <h6>
                        <Link
                           href="/"
                           className="text-base-content/60 text-xs md:text-base font-medium hover:text-primary transition hover:duration-300"
                        >
                           Jason Francisco
                        </Link>
                     </h6>
                  </div>
                  <p className="text-base-content/60 text-xs md:text-base">
                     August 20, 2022
                  </p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default BannerCard
