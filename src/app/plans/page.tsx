import * as React from 'react'
import { Metadata } from 'next'
import { sharedMetadata } from '@shared/libs'
import { PricingSection } from '@features/plans'

export const metadata: Metadata = {
  title: 'Plans',
  description: 'See the simple and perfect plans to start sites.',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'Plans',
    description: 'See the simple and perfect plans to start sites.',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'Plans',
    description: 'See the simple and perfect plans to start sites.',
  },
}

export default function PlansPage(): Readonly<React.ReactElement> {
  return (
    <div className="flex flex-col gap-20 tablet:gap-36">
      <PricingSection />
    </div>
  )
}
