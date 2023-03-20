import Advertisement from '@/components/advertisement/Advertisement';
import PostCard from '@/components/card/PostCard';
import React, { Fragment } from 'react';

const BlogListing = () => {
    return (
        <Fragment>
        {/* Page Body */}
        <main className="container mx-auto">
           <div className="my-20">
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                 {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(
                    (item: any, index: number) => (
                       <div key={index}>
                          <PostCard/>
                       </div>
                    )
                 )}
              </div>
              <div className='flex items-center justify-center w-full mt-8'>
                    <button className="px-5 py-3 border border-secondary rounded-md font-medium text-base">View All Post</button>
                 </div>
           </div>
           <div className="mb-24">
              <Advertisement />
           </div>
        </main>
     </Fragment>
    );
};

export default BlogListing;