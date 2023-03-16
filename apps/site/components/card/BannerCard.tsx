import Image from 'next/image'
import React from 'react'

const BannerCard = () => {
   return (
      <section>
         <div className="relative rounded-xl">
            <Image
               src="/image1.png"
               alt="Banner Image"
               width={1216}
               height={600}
               priority={true}
            />
            <div className="absolute -bottom-16 left-14 rounded-xl p-10 bg-base-100 w-6/12 shadow-dropShadowMd">
               <button className=" text-base-100 px-2.5 py-1 bg-primary text-sm rounded-md">
                  Technology
               </button>
               <h1 className=" text-neutral font-semibold text-4xl leading-10 mt-4">
                  The Impact of Technology on the Workplace: How Technology is
                  Changing
               </h1>
               <div className=" mt-6 flex items-center gap-5">
                  <div className=" flex items-center gap-3">
                     <div className="avatar">
                        <div className="w-9 rounded-full">
                           <img src="/image1.png" />
                        </div>
                     </div>
                     <p className=" text-base-content text-base font-medium">
                        Jason Francisco
                     </p>
                  </div>
                  <p className=" text-base-content text-base">
                     August 20, 2022
                  </p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default BannerCard
