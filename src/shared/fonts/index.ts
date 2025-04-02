import { Inter, JetBrains_Mono, Bricolage_Grotesque } from 'next/font/google'

const inter = Inter({
  display: 'swap',
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

const jetBrainsMono = JetBrains_Mono({
  display: 'swap',
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const bricolageGrotesque = Bricolage_Grotesque({
  display: 'swap',
  variable: '--font-bricolage-grotesque',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const fonts = {
  inter,
  jetBrainsMono,
  bricolageGrotesque,
}
