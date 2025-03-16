'use client'

import { Button, CenteredLayout } from '@shared/components'
import { fonts } from '@shared/fonts'
import '@shared/styles/globals.css'

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fonts.inter.variable}`}
    >
      <body suppressHydrationWarning>
        <CenteredLayout>
          <main className="min-h-screen">
            <h1 className="leading-tight! text-3xl tablet:text-4xl text-center font-medium">
              Something wrong!
            </h1>

            <div className="mt-16 flex justify-center">
              <Button variant={'text'} size={'lg'} onClick={() => reset()}>
                Try again
              </Button>
            </div>
          </main>
        </CenteredLayout>
      </body>
    </html>
  )
}
