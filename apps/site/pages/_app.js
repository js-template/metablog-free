// pages/_app.js
import { Plus_Jakarta_Sans } from 'next/font/google'

const inter = Plus_Jakarta_Sans ({
  subsets: ['latin'],
})

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}