import * as React from 'react'
import { Metadata } from 'next'
import { FAQListSection } from './list'
import { AskSection } from './ask'
import { sharedMetadata } from '@shared/libs'

export const metadata: Metadata = {
  title: 'FAQs',
  description: 'Most asked questions by people around the world',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'FAQs',
    description: 'Most asked questions by people around the world',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'FAQs',
    description: 'Most asked questions by people around the world',
  },
}

export default function FAQsPage(): React.ReactElement<any> {
  return (
    <div className="flex flex-col">
      <FAQListSection />
      <AskSection />
    </div>
  )
}
