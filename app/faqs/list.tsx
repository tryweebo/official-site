import * as React from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion'

const faqs = [
  {
    question: 'Who’s behind Weebo?',
    answer:
      "Surprising fact: Weebo started as a one-person agency and has grown into a remote, global team. Collaborate directly with Nyoman Sunima, the founder and design engineer, and our talented professionals worldwide. We've worked with clients from 15+ countries, including Y Combinator startups, early-stage ventures, angel investors, and creators.",
  },
  {
    question: 'Why not hire a full-time designer and developer?',
    answer:
      "Hiring full-time professionals can be a headache. It's costlier and more challenging to manage. A senior designer might set you back $100k+, while a developer could easily exceed $300k. That's a total of $500k+ when you factor in benefits, vacation days, and more.",
  },
  {
    question: "What if I'm not happy with the results?",
    answer:
      "This doesn't happen very often, if you're not happy, we offer unlimited revisions. We'll continue refining the project until you're 100% content.",
  },
  {
    question: 'Can I get a refund?',
    answer:
      'Although we are unable to provide refunds as we allocate dedicated time and resources to each client, we value flexibility. You have the option to pause your service at any time and resume it later, ensuring that you can fully benefit from our collaboration.',
  },
  {
    question: 'Can Weebo redesign my existing website?',
    answer:
      'Yes, Weebo specializes in redesigning websites to improve user experience, optimize performance, and refresh the visual design while maintaining brand integrity.',
  },
  {
    question: 'How does the audit service work?',
    answer:
      'Our website audit service evaluates your website’s performance, SEO, security, and overall design. We provide a detailed report with actionable insights for improvement.',
  },
  {
    question: 'Can you work with my existing development team or agency?',
    answer:
      'Absolutely! We offer partner plans for agencies and development teams, providing support as a seamless extension of your team.',
  },
  {
    question: 'Do you have experience in specific industries or niches?',
    answer:
      "Yes, We have worked with clients across a variety of industries including healthcare, fintech, real estate, and e-commerce. I'm particularly adept at creating digital solutions for small and medium-sized businesses, helping them leverage technology to streamline operations and drive growth.",
  },
]

export function FAQListSection() {
  return (
    <section className="flex py-20 w-10/12 mx-auto">
      <div className="w-full">
        <Accordion
          type="single"
          collapsible
          className="grid grid-cols-1 gap-x-10 gap-y-4"
        >
          {faqs.map((item, index) => (
            <FAQItem {...item} position={index + 1} key={index} />
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export function FAQItem({ question, answer, position }) {
  return (
    <AccordionItem value={`item-${position}`} className="col-span-1">
      <AccordionTrigger>{question}</AccordionTrigger>
      <AccordionContent>{answer}</AccordionContent>
    </AccordionItem>
  )
}
