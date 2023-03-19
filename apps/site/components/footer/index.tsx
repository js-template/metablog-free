import { FooterDataOne, FooterDataTwo } from '@/data/footerData'
import Link from 'next/link'
import React from 'react'
import NewsLetter from '@/components/newsletter/NewsLetter'

const Footer = () => {
   return (
      <div>
         <div className="bg-base-200 px-5 md:px-0">
            <div className="container mx-auto">
               <footer className=" grid grid-cols-12 gap-5 py-16">
                  <div className="col-span-12 lg:col-span-3">
                     <span className="text-lg font-semibold text-neutral font-sans">
                        About
                     </span>
                     <p className=" mt-3 text-base text-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam
                     </p>
                     <h6 className="mt-6">
                        <span className=" font-semibold text-neutral">
                           Email :
                        </span>
                        <span className="text-secondary">
                           info@jstemplate.net
                        </span>
                     </h6>
                     <h6 className="mt-1">
                        <span className=" font-semibold text-neutral">
                           Phone :
                        </span>
                        <span className="text-secondary">880 123 456 789</span>
                     </h6>
                  </div>
                  <div className="flex justify-between lg:justify-center lg:gap-20 col-span-12 lg:col-span-5">
                     <div>
                        <span className=" text-neutral text-lg font-semibold">
                           Quick Link
                        </span>
                        <div className=" flex flex-col gap-y-2 mt-6">
                           {FooterDataOne.map((item: any, index: number) => (
                              <div key={index}>
                                 <Link href={item.link}>
                                    <p className="link link-hover text-base text-secondary-focus hover:text-primary transition hover:duration-300">
                                       {item.name}
                                    </p>
                                 </Link>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div>
                        <span className=" text-neutral text-lg font-semibold">
                           Category
                        </span>
                        <div className=" flex flex-col gap-y-2 mt-6">
                           {FooterDataTwo.map((item: any, index: number) => (
                              <div key={index}>
                                 <Link href={item.link}>
                                    <p className="link link-hover text-base text-secondary-focus hover:text-primary transition hover:duration-300">
                                       {item.name}
                                    </p>
                                 </Link>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
                  <div className="col-span-12 lg:col-span-4">
                     <NewsLetter />
                  </div>
               </footer>
               <div className=" border border-base-300"></div>
               <div className=" flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between py-8 bg-base-200">
                  <div className="flex items-center gap-2.5">
                     <div>
                        <svg
                           width="48"
                           height="48"
                           viewBox="0 0 48 48"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 29.536 1.87437 34.6342 5.0231 38.6946L10.314 18.7066C12.5156 10.0312 18.2343 5.543 27.4155 5.543H30.5814C37.038 5.543 41.78 11.6041 40.2264 17.871C39.9478 18.995 39.427 20.0446 38.7004 20.9463L36.006 24.2898C35.3146 25.1478 35.0625 26.279 35.3239 27.3494L36.1453 30.7118C36.5704 32.4521 36.4927 34.2773 35.9213 35.9752C33.9775 41.751 28.5636 45.6413 22.4695 45.6413H13.6115C16.755 47.153 20.2786 48 24 48Z"
                              fill="#4B6BFB"
                           />
                           <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M23.6 29.0123H18.9242C17.4329 29.0123 16.1291 30.018 15.7505 31.4604L13.9165 38.4472H21.1614C23.8415 38.4472 26.1845 36.6398 26.865 34.0476L27.0222 33.4487C27.611 31.2057 25.919 29.0123 23.6 29.0123ZM22.2195 31.1351H19.6787C18.8274 31.1351 18.083 31.7086 17.8658 32.5317L16.8649 36.3243H20.871C22.353 36.3243 23.6486 35.3303 24.0248 33.9045L24.1118 33.5752C24.4373 32.3415 23.5017 31.1351 22.2195 31.1351Z"
                              fill="#4B6BFB"
                           />
                           <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M19.9962 15.657C20.3748 14.2145 21.6786 13.2088 23.1699 13.2088H27.8457C30.1647 13.2088 31.8566 15.4023 31.2679 17.6452L31.1107 18.2441C30.4302 20.8364 28.0872 22.6437 25.4071 22.6437H18.1622L19.9962 15.657ZM22.1115 16.7282C22.3287 15.9052 23.0731 15.3317 23.9244 15.3317H26.4652C27.7474 15.3317 28.683 16.5381 28.3575 17.7717L28.2705 18.1011C27.8943 19.5268 26.5987 20.5209 25.1167 20.5209H21.1106L22.1115 16.7282Z"
                              fill="#4B6BFB"
                           />
                        </svg>
                     </div>
                     <div>
                        <h5 className=" text-xl text-neutral-focus">
                           Meta<span className=" font-bold">Blog</span>
                        </h5>
                        <p className=" mt-0.5 text-neutral-focus text-base">
                           © JS Template 2023. All Rights Reserved.
                        </p>
                     </div>
                  </div>
                  <div className=" flex items-center gap-4">
                     <Link href="/">
                        <h6 className="text-base border-r border-secondary-content pr-4 text-neutral-focus hover:text-primary transition hover:duration-300">
                           Terms of Use
                        </h6>
                     </Link>
                     <Link href="/">
                        <h6 className="text-base border-r border-secondary-content pr-4 text-neutral-focus hover:text-primary transition hover:duration-300">
                           Privacy Policy
                        </h6>
                     </Link>
                     <Link href="/">
                        <h6 className="text-base text-neutral-focus hover:text-primary transition hover:duration-300">
                           Cookie Policy
                        </h6>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Footer
