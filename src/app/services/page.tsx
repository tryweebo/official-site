import * as React from 'react'
import { Metadata } from 'next'
import { sharedMetadata } from '@shared/libs'
import {
  PurposeSection,
  ServiceSection,
  ToolsSection,
  TypesSection,
} from '@features/services'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Our services, purpose, and offers',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'Services',
    description: 'Our services, purpose, and offers',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'Services',
    description: 'Our services, purpose, and offers',
  },
}

export default function ServicePage(): Readonly<React.ReactElement> {
  return (
    <div className="flex flex-col gap-20 tablet:gap-36">
      <PurposeSection />
      <ServiceSection />
      <ToolsSection />
      <TypesSection />
    </div>
  )
}
