/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')()


const nextConfig = {
   // image optimization
   images: {
      domains: [ 'placehold.it', 'via.placeholder.com', 'www.atpress.ne.jp', 'o.rada.vn','vietjack.me','yenbaitv.org.vn', 'thegioicotich.vn','mir-s3-cdn-cf.behance.net','i.pinimg.com',   'photo-cms-kienthuc.zadn.vn','images.spiderum.com','trieunguyenhuyentrang.com','hocnguvan.vn','hoigiasudanang.com','theki.vn','deadline.com','cdn.luatminhkhue.vn','luyenthidgnl.com.vn', 'wifim.vn','images2.thanhnien.vn','assets.isu.pub','www.dinhnghia.com.vn', 'bambooschool.edu.vn', 'voicefun.vn','cdn.sforum.vn' ],
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
