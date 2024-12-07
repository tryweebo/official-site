import * as React from 'react'
import type { Metadata } from 'next'
import { config, sharedMetadata } from '@shared/libs'
import { fonts } from '@shared/fonts'
import '@shared/styles/globals.css'
import { AnimationProvider, PosthogProvider } from '@shared/providers'
import { CenteredLayout, Footer, Header } from '@shared/components'

export const metadata: Metadata = {
  title: 'Weebo',
  description:
    'Unlimited web design partner for growing startups, agency & enterprise',
  applicationName: 'Weebo',
  keywords: [
    'Web Designer',
    'Shopify Developer',
    'Web Developer',
    'Webflow Expert',
    'Framer Expert',
    'Wix Developer',
    'Custom Web Designer',
  ],
  publisher: 'Weebo',
  creator: 'Weebo',
  authors: [{ name: 'Nyoman Sunima', url: 'https://nyomansunima.one' }],
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'Weebo',
    description:
      'Unlimited web design partner for growing startups, agency & enterprise',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'Weebo',
    description:
      'Unlimited web design partner for growing startups, agency & enterprise',
  },
  metadataBase: new URL(config.app.host),
  verification: {
    google: config.verification.google,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement<any> {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fonts.inter.variable}`}
    >
      <PosthogProvider>
        <AnimationProvider>
          <body suppressHydrationWarning>
            <CenteredLayout>
              <Header />
              <main className="min-h-screen">{children}</main>
              <Footer />
            </CenteredLayout>
          </body>
        </AnimationProvider>
      </PosthogProvider>
    </html>
  )
}
