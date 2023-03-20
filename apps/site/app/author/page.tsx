import AuthorInfo from '@/components/authorInfo/AuthorInfo'
import PostCard from '@/components/card/PostCard'
import React, { Fragment } from 'react'

const Author = () => {
   return (
      <Fragment>
         {/* Author info */}
         <AuthorInfo />
         {/* Page Body */}
         <main className="container mx-auto mt-12 mb-24 px-5 sm:px-0">
            <h5 className="text-base-content font-bold text-2xl mb-8">
               Latest Post
            </h5>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
               {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: any, index: number) => (
                  <div key={index}>
                     <PostCard />
                  </div>
               ))}
            </div>
         </main>
      </Fragment>
   )
}

export default Author
