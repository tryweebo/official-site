import * as React from 'react'
import type { Metadata } from 'next'
import '~/globals.css'
import { interFont } from '~/fonts'
import { AnimationProvider } from '~/components/animation-provider'
import { config } from '~/lib/config'
import { ThemeProvider } from '~/components/theme-provider'
import Header from '~/components/header'
import Footer from '~/components/footer'

// default metadata for the site
export const metadata: Metadata = {
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
  authors: [{ name: 'Weebo' }],
  publisher: 'Weebo',
  creator: 'Weebo',
  metadataBase: new URL(config.app.host),
  verification: {
    google: 'fTZZv4lCZ2_i8jo8FFKuXc6Acuy8jMClhwDzRX64NgE',
  },
}

// allow to centering the layout and
// make all of the pages, components, and sections align with the styles
function CenteredLayout({ children }): React.ReactElement {
  return (
    <div className="px-5 laptop:px-0 container mx-auto">
      <div className="mx-auto w-full tablet:w-11/12 laptop:w-9/12 desktop:w-7/12 laptop:px-10">
        {children}
      </div>
    </div>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${interFont.variable}`}
    >
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AnimationProvider>
            <CenteredLayout>
              <Header />
              <main className="min-h-screen">{children}</main>
              <Footer />
            </CenteredLayout>
          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
