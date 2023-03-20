import React from 'react'

const BannerCardTwo = () => {
   return (
      <div className="card relative font-work">
         <figure>
            <img
               width="1216"
               height="450"
               alt={`banner_image`}
               src="/image1.png"
               className="rounded-xl"
            />
         </figure>
         <div className="card-body p-2 md:p-10 absolute bottom-0 w-full md:w-8/12">
            <div className="w-fit text-white px-2.5 py-1 bg-primary text-xs md:text-sm rounded-md mb-2 md:mb-4">
               Technology
            </div>
            <h3>
               <a
                  href="/"
                  className="text-neutral-content font-semibold text-xl md:text-2xl lg:text-4xl leading-5 md:leading-10 hover:text-primary transition hover:duration-500"
               >
                  The Impact of Technology on the Workplace: How Technology is
                  Changing
               </a>
            </h3>
            <div className="mt-3 md:mt-6 flex items-center gap-5 text-neutral-content">
               <div className=" flex items-center gap-3">
                  <div className="avatar">
                     <div className="w-9 rounded-full">
                        <img src="/image1.png" alt={`avatar_image`} />
                     </div>
                  </div>
                  <h5>
                     <a
                        href="/"
                        className="text-xs md:text-base font-medium hover:text-primary transition hover:duration-300"
                     >
                        Jason Francisco
                     </a>
                  </h5>
               </div>
               <p className=" text-xs md:text-base">August 20, 2022</p>
            </div>
         </div>
      </div>
   )
}

export default BannerCardTwo
