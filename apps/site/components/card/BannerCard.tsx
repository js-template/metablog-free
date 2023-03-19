import React from 'react'

const BannerCard = () => {
   return (
      <section>
         <div className="relative rounded-xl">
            <img width="1216" height="600" src="/image1.png" />
            <div className="absolute -bottom-16 left-4 md:left-14 rounded-xl p-4 md:p-10 bg-base-100 w-10/12 md:w-7/12 lg:w-6/12 shadow-dropShadowMd">
               <button className=" text-white px-2.5 py-1 bg-primary text-xs md:text-sm rounded-md">
                  Technology
               </button>
               <a href="/">
                  <h1 className=" text-neutral font-semibold text-xl md:text-2xl lg:text-4xl leading-5 md:leading-10 mt-4">
                     The Impact of Technology on the Workplace: How Technology
                     is Changing
                  </h1>
               </a>
               <div className=" mt-6 flex items-center gap-5">
                  <div className=" flex items-center gap-3">
                     <div className="avatar">
                        <div className="w-9 rounded-full">
                           <img src="/image1.png" />
                        </div>
                     </div>
                     <a href="/">
                        <p className=" text-secondary-focus text-xs md:text-base font-medium hover:text-primary transition hover:duration-300">
                           Jason Francisco
                        </p>
                     </a>
                  </div>
                  <p className="text-secondary-focus text-xs md:text-base">
                     August 20, 2022
                  </p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default BannerCard
