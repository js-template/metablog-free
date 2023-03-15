/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
      appDir: 'apps/site',
   },
   // image optimization
   images: {
      domains: ['placehold.it'],
   },
}

module.exports = nextConfig
