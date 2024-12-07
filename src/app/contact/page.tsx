import * as React from 'react'
import { Metadata } from 'next'
import ContactList from './list'
import { SocialMediaList } from './social'
import { sharedMetadata } from '@shared/libs'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with me right now, start your idea',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'Contact',
    description: 'Build your own website with simple steps',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'Contact',
    description: 'Build your own website with simple steps',
  },
}

export default function ContactPage(): React.ReactElement<any> {
  return (
    <div className="flex flex-col">
      <ContactList />
      <SocialMediaList />
    </div>
  )
}
