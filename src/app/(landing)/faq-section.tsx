import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@shared/components'
import * as React from 'react'
import * as motion from 'motion/react-client'

type FAQ = {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: 'How much does a website cost?',
    answer:
      'There’s a lot of factors that go into how much a website ends up costing, but we use standardised pricing so you know you’re always paying a fair price. Most new websites will fall into the $5-8k range.',
  },
  {
    question: 'Do you provide on-going support?',
    answer:
      'We don’t disappear after the work is done. Add us to your Slack and we’ll be there any time you need an update.',
  },
  {
    question: 'I already have the designs, can you develop them?',
    answer:
      'Yep! We can convert Figma designs into fully functioning Webflow websites. Webflow development usually takes 1-3 weeks of our Growth plan.',
  },
  {
    question:
      'What if I want to work with someone else after the website is built?',
    answer:
      "Getting locked into a designer is a very common concern for clients, so we do as much as we can to make sure this isn't an issue. We use Client First, a standardised naming system for Webflow, which means anyone who also knows it (which is a lot) can easily take over any site we build. If we create any custom functionality we also provide explanations of how it works, and clearly annotate any custom code. We want you to choose to continue to work with us, rather than being forced to!",
  },
  {
    question: "Can we have a quick call to see if we're a good fit?",
    answer:
      "Absolutely! We'd love to chat and see if we're a good fit for your project.",
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
    question: 'How quickly will I receive my project?',
    answer:
      "True to our name, we're Supafast! Typically, most requests are fulfilled in just 48 hours or less. However, for more complex requests, the turnaround time may be a bit longer. Rest assured, we'll keep you informed every step of the way.",
  },
  {
    question: 'Can I get a refund?',
    answer:
      'Although we are unable to provide refunds as we allocate dedicated time and resources to each client, we value flexibility. You have the option to pause your service at any time and resume it later, ensuring that you can fully benefit from our collaboration.',
  },
]

function FAQItem({
  faq,
  value,
}: {
  faq: FAQ
  value: string
}): React.ReactElement {
  const { question, answer } = faq

  return (
    <AccordionItem
      value={value}
      className="transition-all duration-300 hover:-rotate-y-2 hover:scale-105"
    >
      <AccordionTrigger>{question}</AccordionTrigger>
      <AccordionContent>{answer}</AccordionContent>
    </AccordionItem>
  )
}

export function FAQSesction(): React.ReactElement {
  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        damping: 8,
        stiffness: 60,
        ease: 'easeInOut',
        duration: '1.2',
      }}
      viewport={{ once: true, margin: '0% 0% -30% 0%' }}
      className="flex flex-col items-center py-20"
      id="faq"
    >
      <span className="text-sm text-foreground/40 font-mono">FAQs.</span>

      <h2 className="text-3xl font-semibold text-center leading-tight group laptop:w-9/12 mt-8">
        Most asked questions
        <br />
        <span className="text-foreground/30">about us</span>
      </h2>

      <div className="flex items-center justify-center gap-5 mt-16 w-full">
        <Accordion
          type="single"
          collapsible
          className="flex flex-col gap-3 w-full tablet:w-10/12 laptop:w-8/12"
        >
          {faqs.map((faq, index) => (
            <FAQItem faq={faq} value={`value-${index}`} key={index} />
          ))}
        </Accordion>
      </div>
    </motion.section>
  )
}
