// lib/mdx.js
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
const postsDirectory = path.join(process.cwd(), 'app/posts')

export function getFiles() {
   return fs.readdirSync(postsDirectory)
}

export async function getFileBySlug(slug: string) {
   const realSlug = slug.replace(/\.mdx$/, '')
   const fullPath = path.join(postsDirectory, `${realSlug}.mdx`)
   const fileContents = fs.readFileSync(fullPath, 'utf8')
   const { data, content } = matter(fileContents)

   return { slug: realSlug, mdxSource: content, frontMatter: data }
}
