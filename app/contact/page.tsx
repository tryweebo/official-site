import * as React from 'react'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/shared-metadata'
import ContactList from './list'
import { SocialMediaList } from './social'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with me right now, start your idea',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Contact',
    description: 'Build your own website with simple steps',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Contact',
    description: 'Build your own website with simple steps',
  },
}

export default function ContactPage(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <ContactList />
      <SocialMediaList />
    </div>
  )
}
