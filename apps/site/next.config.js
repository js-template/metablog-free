/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
      appDir: true,
   },
   // image optimization
   images: {
      domains: ['placehold.it', 'via.placeholder.com'],
   },
}

module.exports = nextConfig
