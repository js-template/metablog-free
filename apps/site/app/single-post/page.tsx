import Advertisement from '@/components/advertisement/Advertisement'
import Image from 'next/image'
import React, { Fragment } from 'react'
const SinglePost = () => {
   return (
      <Fragment>
         <section className=" container mx-auto px-5 md:px-0 w-full md:w-10/12 lg:w-5/12">
            <div className="py-5">
               <div className="w-fit text-white px-2.5 py-1 bg-primary text-xs md:text-sm rounded-md mb-2 md:mb-4">
                  Technology
               </div>
               <h1 className="text-base-content font-semibold text-xl md:text-2xl lg:text-4xl leading-5 md:leading-10 ">
                  The Impact of Technology on the Workplace: How Technology is
                  Changing
               </h1>
               <div className="mt-3 md:mt-6 flex items-center gap-5 text-base-content/60">
                  <div className=" flex items-center gap-3">
                     <div className="avatar">
                        <div className="w-9 rounded-full">
                           <img src="/image1.png" alt={`avatar_image`} />
                        </div>
                     </div>
                     <a
                        href="/"
                        className=" text-xs md:text-base font-medium hover:text-primary transition hover:duration-300"
                     >
                        Jason Francisco
                     </a>
                  </div>
                  <p className=" text-xs md:text-base">August 20, 2022</p>
               </div>
            </div>
            <div className="mt-8">
               <Image
                  width="800"
                  height="462"
                  alt={`blog_image`}
                  src="/blog2.png"
               />
            </div>

            {/* article section start  */}
            <div className="mt-8">
               <p className="text-xl text-base-content/80">
                  Traveling is an enriching experience that opens up new
                  horizons, exposes us to different cultures, and creates
                  memories that last a lifetime. However, traveling can also be
                  stressful and overwhelming, especially if you dont plan and
                  prepare adequately. In this blog article, well explore tips
                  and tricks for a memorable journey and how to make the most of
                  your travels. <br /> <br /> One of the most rewarding aspects
                  of traveling is immersing yourself in the local culture and
                  customs. This includes trying local cuisine, attending
                  cultural events and festivals, and interacting with locals.
                  Learning a few phrases in the local language can also go a
                  long way in making connections and showing respect.
               </p>
               <h5 className="text-2xl text-base-content font-semibold mt-8 mb-4">
                  Research Your Destination
               </h5>
               <p className="text-xl text-base-content/80">
                  Traveling is an enriching experience that opens up new
                  horizons, exposes us to different cultures, and creates
                  memories that last a lifetime. However, traveling can also be
                  stressful and overwhelming, especially if you dont plan and
                  prepare adequately. In this blog article, well explore tips
                  and tricks for a memorable journey and how to make the most of
                  your travels. <br /> <br /> One of the most rewarding aspects
                  of traveling is immersing yourself in the local culture and
                  customs. This includes trying local cuisine, attending
                  cultural events and festivals, and interacting with locals.
                  Learning a few phrases in the local language can also go a
                  long way in making connections and showing respect.
               </p>
               <h5 className="text-2xl text-base-content font-semibold mt-8 mb-4">
                  Plan Your Itinerary
               </h5>
               <p className="text-xl text-base-content/80">
                  Traveling is an enriching experience that opens up new
                  horizons, exposes us to different cultures, and creates
                  memories that last a lifetime. However, traveling can also be
                  stressful and overwhelming, especially if you dont plan and
                  prepare adequately. In this blog article, well explore tips
                  and tricks for a memorable journey and how to make the most of
                  your travels. <br /> <br /> One of the most rewarding aspects
                  of traveling is immersing yourself in the local culture and
                  customs. This includes trying local cuisine, attending
                  cultural events and festivals, and interacting with locals.
                  Learning a few phrases in the local language can also go a
                  long way in making connections and showing respect.
               </p>
            </div>
            <div className="p-8 bg-base-200 rounded-xl border-l-4  border-base-content/10 mt-8">
               <p className="text-base-content italic text-2xl">
                  “ Traveling can expose you to new environments and potential
                  health risks, so its crucial to take precautions to stay safe
                  and healthy. ”
               </p>
            </div>
            <div className="mt-8">
               <Image
                  width="800"
                  height="462"
                  alt={`blog_image`}
                  src="/blog2.png"
               />
            </div>
            <div className="flex items-center justify-center my-8">
               <div className="py-4 bg-base-content/10 text-base-content/60 text-center rounded-xl w-11/12">
                  <p className="text-sm">Advertisement</p>
                  <h6 className=" text-xl font-semibold">You can place ads</h6>
                  <p className="text-lg">750x100</p>
               </div>
            </div>
            <div className="mb-20">
               <h5 className="text-2xl text-base-content font-semibold mb-4">
                  Pack Lightly and Smartly
               </h5>
               <p className="text-xl text-base-content/80">
                  Packing can be a daunting task, but with some careful planning
                  and smart choices, you can pack light and efficiently. Start
                  by making a packing list and sticking to it, focusing on
                  versatile and comfortable clothing that can be mixed and
                  matched. Invest in quality luggage and packing organizers to
                  maximize space and minimize wrinkles.
               </p>
               <h5 className="text-2xl text-base-content font-semibold mt-8 mb-4">
                  Stay Safe and Healthy
               </h5>
               <p className="text-xl text-base-content/80">
                  Packing can be a daunting task, but with some careful planning
                  and smart choices, you can pack light and efficiently. Start
                  by making a packing list and sticking to it, focusing on
                  versatile and comfortable clothing that can be mixed and
                  matched. Invest in quality luggage and packing organizers to
                  maximize space and minimize wrinkles.
               </p>
               <h5 className="text-2xl text-base-content font-semibold mt-8 mb-4">
                  Immerse Yourself in the Local Culture
               </h5>
               <p className="text-xl text-base-content/80">
                  One of the most rewarding aspects of traveling is immersing
                  yourself in the local culture and customs. This includes
                  trying local cuisine, attending cultural events and festivals,
                  and interacting with locals. Learning a few phrases in the
                  local language can also go a long way in making connections
                  and showing respect.
               </p>
               <h5 className="text-2xl text-base-content font-semibold mt-8 mb-4">
                  Capture Memories
               </h5>
               <p className="text-xl text-base-content/80">
                  Finally, dont forget to capture memories of your journey.
                  Whether is through photographs, journaling, or souvenirs,
                  preserving the moments and experiences of your travels can
                  bring joy and nostalgia for years to come. However, its also
                  essential to be present in the moment and not let technology
                  distract you from the beauty of your surroundings.
               </p>
               <h5 className="text-2xl text-base-content font-semibold mt-8 mb-4">
                  Conclusion:
               </h5>
               <p className="text-xl text-base-content/80">
                  Traveling is an art form that requires a blend of planning,
                  preparation, and spontaneity. By following these tips and
                  tricks, you can make the most of your journey and create
                  memories that last a lifetime. So pack your bags, embrace the
                  adventure, and enjoy the ride.
               </p>
            </div>
         </section>
      </Fragment>
   )
}

export default SinglePost
