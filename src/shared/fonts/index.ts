import { Inter } from 'next/font/google'

const inter = Inter({
  display: 'swap',
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const fonts = {
  inter,
}
