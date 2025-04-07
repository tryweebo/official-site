import * as React from 'react'
import type { Metadata } from 'next'
import { config, sharedMetadata } from '@shared/libs'
import { fonts } from '@shared/fonts'
import '@shared/styles/globals.css'
import { PosthogProvider } from '@shared/providers'
import { CenteredLayout, Footer, Header } from '@shared/components'
import { Banner } from '@shared/components/common/banner'

export const metadata: Metadata = {
  title: 'Lead Web Design & Development Partner | Weebo',
  description:
    'Unlimited web design partner for growing startups, agencies & enterprises',
  applicationName: 'Weebo',
  keywords: [
    'Landing Page',
    'Website',
    'Web Designer',
    'Web Developer',
    'Web Design',
    'Webflow Expert',
    'Framer Expert',
    'Custom Web Designer',
    'Developer',
    'Designer',
  ],
  publisher: 'Weebo',
  creator: 'Weebo',
  authors: [{ name: 'Nyoman Sunima', url: 'https://nyomansunima.one' }],
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'Lead Web Design & Development Partner | Weebo',
    description:
      'Unlimited web design partner for growing startups, agencies & enterprises',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'Lead Web Design & Development Partner | Weebo',
    description:
      'Unlimited web design partner for growing startups, agencies & enterprises',
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
      className={`${fonts.inter.variable} ${fonts.jetBrainsMono.variable} ${fonts.bricolageGrotesque.variable}`}
    >
      <PosthogProvider>
        <body suppressHydrationWarning>
          <CenteredLayout>
            <Banner />
            <Header />
            <main className="min-h-screen py-20 tablet:pt-0 tablet:pb-36">
              {children}
            </main>
            <Footer />
          </CenteredLayout>
        </body>
      </PosthogProvider>
    </html>
  )
}
