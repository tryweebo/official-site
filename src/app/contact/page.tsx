import * as React from 'react'
import { Metadata } from 'next'
import { sharedMetadata } from '@shared/libs'
import { ContactSection } from '@features/contact'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Connect and get in touch with us',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'Contact',
    description: 'Connect and get in touch with us',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'Contact',
    description: 'Connect and get in touch with us',
  },
}

export default function ContactPage(): Readonly<React.ReactElement> {
  return (
    <div className="flex flex-col gap-20 tablet:gap-36">
      <ContactSection />
    </div>
  )
}
