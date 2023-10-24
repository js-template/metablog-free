import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'

const postsDirectory = path.join(process.cwd(), 'app/posts')

function getPost({ slug }: { slug: string }) {
   const realSlug = slug.replace(/\.mdx$/, '')
   const fullPath = path.join(postsDirectory, `${realSlug}.mdx`)

   const markdownFile = fs.readFileSync(fullPath, 'utf-8')

   const { data: fontMatter, content } = matter(markdownFile)

   return {
      fontMatter,
      slug,
      content,
   }
}

export default function Page({ params }: any) {
   const props = getPost(params)

   return (
      <article
         className="container mx-auto font-serif"
         style={{
            fontSize: '1.2rem',
            lineHeight: '2.5',
            fontFamily: 'var(--font-work-sans)',
         }}
      >
         <h1>{props.fontMatter.title}</h1>
         <MDXRemote source={props.content} />
      </article>
   )
}
export async function generateStaticParams() {
   const files = fs.readdirSync(postsDirectory)

   const paths = files.map((filename) => ({
      slug: filename.replace('.mdx', ''),
   }))

   return paths
}
