import React from 'react'

/**
 * Our Advertisement section can be used to provide various adds on a site.
 *
 * @property heading and add size
 *
 * @returns React component that can be easily integrated into any web application.
 */

const Advertisement = () => {
   return (
      <div className="container mx-auto w-11/12 lg:w-8/12">
         <div className="py-4 bg-base-content/10 text-base-content/60 text-center rounded-xl font-work">
            <p className="text-sm">Advertisement</p>
            <p className="text-xl font-semibold leading-6">You can place ads</p>
            <p className="text-lg leading-[26px]">750x100</p>
         </div>
      </div>
   )
}

export default Advertisement
