import * as React from 'react'
import Hero from './hero'
import Benefit from './benefit'
import Service from './service'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/app/shared-metadata'

export const metadata: Metadata = {
  title: 'Your Web Design Partner On The Go | Weebo',
  description:
    'Unlimited web design partner for growing startups, agency & enterprise',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Your Web Design Partner On The Go | Weebo',
    description:
      'Unlimited web design partner for growing startups, agency & enterprise',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Your Web Design Partner On The Go | Weebo',
    description:
      'Unlimited web design partner for growing startups, agency & enterprise',
  },
}

export default function HomePage(): Readonly<React.ReactElement> {
  return (
    <main className="">
      <Hero />
      <Benefit />
      <Service />
    </main>
  )
}
