'use client'
import React from 'react'
import Welcome from './data.mdx'
import ThanhNgu from './thanhngu.mdx'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

type Props = {}

const Page = (props: Props) => {
   return (
      <div className="container m-auto p-8">
         <div className="justify-center align-middle p-4">
            {/* <Welcome /> */}
            
            <ThanhNgu />
         </div>
      </div>
   )
}

export default Page
