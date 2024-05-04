import type { Metadata } from 'next'
import './globals.css'
import * as React from 'react'
import { cabinetGroteskFont, satoshiFont } from './fonts'
import Header from './header'
import Footer from './footer'
import AnimationProvider from '~/components/provider/animation'
import { settings } from '~/lib/config/settings'

export const metadata: Metadata = {
  applicationName: 'Weebo',
  keywords: [
    'Web Designer',
    'Shopify Developer',
    'Web Developer',
    'Webflow Expert',
    'Framer Expert',
    'Squarespace',
    'Seo',
    'Wix Developer',
    'Fullstack',
  ],
  authors: [{ name: 'Weebo' }],
  publisher: 'Weebo',
  creator: 'Weebo',
  metadataBase: new URL(settings.app.host),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${cabinetGroteskFont.variable} ${satoshiFont.variable}`}
    >
      <AnimationProvider>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </AnimationProvider>
    </html>
  )
}
