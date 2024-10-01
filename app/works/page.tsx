import * as React from 'react'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/shared-metadata'

export const metadata: Metadata = {
  title: 'Works',
  description:
    'See all of my works including projects, apps, products, case studies, idea and playground',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Works',
    description:
      'See all of my works including projects, apps, products, case studies, idea and playground',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Works',
    description:
      'See all of my works including projects, apps, products, case studies, idea and playground',
  },
}

export default function ResourcesPage(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <section className="flex flex-col py-20 laptop:pb-56"></section>
    </div>
  )
}
