import {
  BenefitSection,
  CTASection,
  FAQSesction,
  HeroSection,
  MissionSection,
  PlansSection,
  ProcessSection,
  ServiceSection,
  TestimonialSection,
  WorkSection,
} from "@features/landing"
import { generatedMetadata } from "@shared/libs"

export function meta() {
  return generatedMetadata({
    title: "Lead Web Design & Development Partner | Weebo",
    description:
      "Unlimited web design partner for growing startups, agencies & enterprises",
  })
}

export default function HomePage() {
  return (
    <main className="flex flex-col gap-10">
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
    </main>
  )
}
