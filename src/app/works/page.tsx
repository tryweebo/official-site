import * as React from 'react'
import { Metadata } from 'next'
import { sharedMetadata } from '@shared/libs'

export const metadata: Metadata = {
  title: 'Works',
  description:
    'See all of my works including projects, apps, products, case studies, idea and playground',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'Works',
    description:
      'See all of my works including projects, apps, products, case studies, idea and playground',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'Works',
    description:
      'See all of my works including projects, apps, products, case studies, idea and playground',
  },
}

export default function ResourcesPage(): React.ReactElement<any> {
  return (
    <div className="flex flex-col">
      <section className="flex flex-col py-20 laptop:pb-56"></section>
    </div>
  )
}
