import * as React from 'react'
import { Metadata } from 'next'
import { sharedMetadata } from '@shared/libs'
import { FAQSection } from '@features/faqs'

export const metadata: Metadata = {
  title: 'FAQs',
  description: 'See the most asked questions',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'FAQs',
    description: 'See the most asked questions',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'FAQs',
    description: 'See the most asked questions',
  },
}

export default function FAQsPage(): Readonly<React.ReactElement> {
  return (
    <div className="flex flex-col gap-20 tablet:gap-36">
      <FAQSection />
    </div>
  )
}
