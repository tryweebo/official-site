import * as React from 'react'
import { Metadata } from 'next'
import { HeroSection } from './hero'
import { sharedMetadata } from '@shared/libs'

export const metadata: Metadata = {
  title: 'Weebo',
  description:
    'Unlimited web design partner for growing startups, agency & enterprise',
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
}

export default function HomePage(): Readonly<React.ReactElement<any>> {
  return (
    <main className="flex flex-col">
      <HeroSection />
    </main>
  )
}
