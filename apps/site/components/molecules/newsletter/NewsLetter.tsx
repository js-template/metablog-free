import React from 'react'


/**
 * Our NewsLetter is a reusable UI component that used to take user email.
 *
 * @property heading, an input field and a button.
 *
 * @returns React component that can be easily integrated into any web application.
 */

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
            <div className="relative flex items-center mt-7">
               <input
                  placeholder="Your Email"
                  type="email"
                  className="px-4 py-3 border border-base-content/10 rounded-md w-full outline-none text-base-content placeholder:text-base bg-base-100 "
               />
               <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-4 text-base-content"
               >
                  <path
                     fillRule="evenodd"
                     clipRule="evenodd"
                     d="M2.4375 1.375C1.91973 1.375 1.5 1.79473 1.5 2.3125V11.6875C1.5 12.2053 1.91973 12.625 2.4375 12.625H15.5625C16.0803 12.625 16.5 12.2053 16.5 11.6875V2.3125C16.5 1.79473 16.0803 1.375 15.5625 1.375H2.4375ZM0.25 2.3125C0.25 1.10438 1.22938 0.125 2.4375 0.125H15.5625C16.7706 0.125 17.75 1.10438 17.75 2.3125V11.6875C17.75 12.8956 16.7706 13.875 15.5625 13.875H2.4375C1.22938 13.875 0.25 12.8956 0.25 11.6875V2.3125Z"
                     fill="currentColor"
                  />
                  <path
                     fillRule="evenodd"
                     clipRule="evenodd"
                     d="M2.88165 2.86629C3.09357 2.59382 3.48625 2.54474 3.75871 2.75665L9 6.83321L14.2413 2.75665C14.5138 2.54474 14.9064 2.59382 15.1183 2.86629C15.3303 3.13875 15.2812 3.53143 15.0087 3.74335L9.38371 8.11835C9.15802 8.29389 8.84198 8.29389 8.61629 8.11835L2.99129 3.74335C2.71882 3.53143 2.66974 3.13875 2.88165 2.86629Z"
                     fill="currentColor"
                  />
               </svg>
            </div>
            <button className="btn btn-primary py-3 text-center font-medium w-full rounded-md mt-2 text-white text-base">
               Subscribe
            </button>
         </div>
      </div>
   )
}

export default NewsLetter
