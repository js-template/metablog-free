import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AuthorInfo = () => {
   return (
      <div className="container mx-auto py-12 sm:mt-8 bg-base-200 px-5 sm:px-0">
         <div className="flex items-center justify-center gap-4">
            <div className="avatar">
               <div className="w-16 rounded-full">
                  <Image
                     src="/avatar.png"
                     width={64}
                     height={64}
                     alt="avatar_image"
                  />
               </div>
            </div>
            <div>
               <h4 className="text-base-content text-base sm:text-xl font-medium">
                  Jonathan Doe
               </h4>
               <span className="text-secondary text-xs sm:text-sm">
                  Collaborator & Editor
               </span>
            </div>
         </div>
         <p className="text-sm sm:text-lg text-secondary-focus text-center py-6 max-w-2xl w-full mx-auto">
            Meet Jonathan Doe, a passionate writer and blogger with a love for
            technology and travel. Jonathan holds a degree in Computer Science
            and has spent years working in the tech industry, gaining a deep
            understanding of the impact technology has on our lives.
         </p>
         <div className="flex items-center justify-center gap-2">
            {socialShare?.map((item, index) => (
               <Link href={item?.link} target="_blank" key={index}>
                  <Image
                     src={item?.icon}
                     width={32}
                     height={32}
                     alt={item?.alt}
                  />
               </Link>
            ))}
         </div>
      </div>
   )
}

export default AuthorInfo

// social share icons
const socialShare = [
   {
      id: 1,
      icon: '/icon/facebook.png',
      alt: 'facebook_icon',
      link: '/',
   },
   {
      id: 2,
      icon: '/icon/twitter.png',
      alt: 'twitter_icon',
      link: '/',
   },
   {
      id: 3,
      icon: '/icon/instagram.png',
      alt: 'instagram_icon',
      link: '/',
   },
   {
      id: 4,
      icon: '/icon/linkedin.png',
      alt: 'linkedin_icon',
      link: '/',
   },
]
