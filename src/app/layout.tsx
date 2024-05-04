import type { Metadata } from 'next'
import './globals.css'
import * as React from 'react'
import { cabinetGroteskFont, satoshiFont } from './fonts'
import Header from './header'
import Footer from './footer'
import AnimationProvider from '~/components/provider/animation'

export const metadata: Metadata = {
  title: 'Your web design partner on the go | Weebo',
  description:
    'Unlimited web design partner for growing startups, agency & enterprise',
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
