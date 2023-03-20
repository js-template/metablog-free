import Image from 'next/image'
import React from 'react'

const NewsLetter = () => {
   return (
      <div className="w-full">
         <div className="bg-base-100 py-8 px-9 rounded-xl">
            <p className="text-center text-xl font-semibold text-base-content">
               Weekly Newsletter
            </p>
            <p className="mt-2 text-base text-center text-base-content/60">
               Get blog articles and offers via email
            </p>
            <div className="relative">
               <input
                  placeholder="Your Email"
                  type="email"
                  className="px-4 py-3 border border-base-200 rounded-md w-full outline-none mt-7 text-base-content placeholder:text-base bg-base-100 "
               />
               <Image
                  src="/email.png"
                  alt="email"
                  width={18}
                  height={14}
                  priority={true}
                  className="absolute right-4 top-10"
               />
            </div>
            <button className="btn btn-primary py-3 text-center font-medium w-full rounded-md mt-2 text-white">
               Subscribe
            </button>
         </div>
      </div>
   )
}

export default NewsLetter
