import * as React from 'react'
import { Metadata } from 'next'
import { HeroSection } from '@features/landing'
import { sharedMetadata } from '@shared/libs'

export const metadata: Metadata = {
  title: 'Weebo',
  description:
    'Unlimited web design partner for growing startups, agencies & enterprises',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'Weebo',
    description:
      'Unlimited web design partner for growing startups, agencies & enterprises',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'Weebo',
    description:
      'Unlimited web design partner for growing startups, agencies & enterprises',
  },
}

export default function HomePage(): Readonly<React.ReactElement> {
  return (
    <div className="flex flex-col gap-20 tablet:gap-36">
      <HeroSection />
    </div>
  )
}
