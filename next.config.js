/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')()


const nextConfig = {
   // image optimization
   images: {
      domains: [ 'placehold.it', 'via.placeholder.com' ],
   },
   // Configure `pageExtensions`` to include MDX files
   pageExtensions: [ 'js', 'jsx', 'mdx', 'ts', 'tsx', 'md' ],
   // Optionally, add any other Next.js config below
}

module.exports = withMDX(nextConfig, {
   experimental: {
      mdxRs: true,
   },
})
