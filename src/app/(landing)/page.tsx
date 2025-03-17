import * as React from 'react'
import { Metadata } from 'next'
import { sharedMetadata } from '@shared/libs'
import { HeroSection } from './hero-section'
import { BenefitsSection } from './benefits-section'
import { FAQSesction } from './faq-section'
import { ServiceSection } from './service-section'
import { PlansSection } from './plans-section'
import { WorkSection } from './work-section'
import { ProcessSection } from './process-section'
import { CTASection } from './cta-section'

export const metadata: Metadata = {
  title: 'Lead Web Design & Development Partner | Weebo',
  description:
    'Unlimited web design partner for growing startups, agencies & enterprises',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'Lead Web Design & Development Partner | Weebo',
    description:
      'Unlimited web design partner for growing startups, agencies & enterprises',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'Lead Web Design & Development Partner | Weebo',
    description:
      'Unlimited web design partner for growing startups, agencies & enterprises',
  },
}

export default function HomePage(): Readonly<React.ReactElement> {
  return (
    <div className="flex flex-col gap-10">
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
      <ServiceSection />
      <WorkSection />
      <PlansSection />
      <FAQSesction />
      <CTASection />
    </div>
  )
}
