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
} from "@features/landing";
import { generateMetaTags } from "@shared/libs";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: generateMetaTags({
      title: "Lead Web Design & Development Partner | Weebo",
      description:
        "Unlimited web design partner for growing startups, agencies & enterprises",
    }),
  }),
  component: PageComponent,
});

function PageComponent() {
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
  );
}
