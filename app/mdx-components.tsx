import type { MDXComponents } from 'mdx/types'

const h1: MDXComponents['h1'] = (props) => <h1 {...props} />

export function useMDXComponents(components: MDXComponents): MDXComponents {
   return {
      ...components,
   }
}
