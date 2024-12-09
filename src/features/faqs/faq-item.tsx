import * as React from 'react'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@shared/components'

export type FAQData = {
  question: string
  answer: string
}

type FAQItemProps = {
  faq: FAQData
  position: number
}

export function FAQItem({
  position,
  faq,
}: FAQItemProps): React.ReactElement<any> {
  const { answer, question } = faq

  return (
    <AccordionItem value={`item-${position}`}>
      <AccordionTrigger>{question}</AccordionTrigger>
      <AccordionContent>{answer}</AccordionContent>
    </AccordionItem>
  )
}
