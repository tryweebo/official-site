import * as React from 'react'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/shared-metadata'
import { HeroSection } from './hero'

export const metadata: Metadata = {
  title: 'Weebo',
  description:
    'Unlimited web design partner for growing startups, agency & enterprise',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Weebo',
    description:
      'Unlimited web design partner for growing startups, agency & enterprise',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Weebo',
    description:
      'Unlimited web design partner for growing startups, agency & enterprise',
  },
}

export default function HomePage(): Readonly<React.ReactElement> {
  return (
    <main className="flex flex-col">
      <HeroSection />
    </main>
  )
}
