import * as React from 'react'
import { Metadata } from 'next'
import { sharedMetadata } from '@shared/libs'
import { HeroSection } from './hero-section'
import { FAQSesction } from './faq-section'
import { ServiceSection } from './services/service-section'
import { PlansSection } from './plans/plans-section'
import { WorkSection } from './work-section'
import { ProcessSection } from './process-section'
import { CTASection } from './cta-section'
import { TestimonialSection } from './testimonial-section'
import { MissionSection } from './mission-section'
import { BenefitSection } from './benefit-section'

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
      <MissionSection />
      <ProcessSection />
      <ServiceSection />
      <WorkSection />
      <TestimonialSection />
      <BenefitSection />
      <PlansSection />
      <FAQSesction />
      <CTASection />
    </div>
  )
}
