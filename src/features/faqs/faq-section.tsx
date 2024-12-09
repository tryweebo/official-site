'use client'

import * as React from 'react'
import { motion } from 'motion/react'
import { Accordion } from '@shared/components'
import { FAQData, FAQItem } from './faq-item'
import data from './faq-data.json'

const faqs: FAQData[] = data.faqs as FAQData[]

export function FAQSection(): React.ReactElement<any> {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-10 tablet:gap-16">
        <motion.h2
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
          viewport={{ once: true, margin: '-30% 0px' }}
          className="text-2xl tablet:text-3xl laptop:text-3xl !leading-tight font-medium text-balance"
        >
          Feeling stuck? check the most asked questions.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
          viewport={{ once: true, margin: '-30% 0px' }}
          className="flex w-full"
        >
          <div className="flex w-full">
            <Accordion
              type="single"
              collapsible
              className="flex flex-col w-full gap-2"
            >
              {faqs.map((faq, index) => (
                <FAQItem key={index} position={index + 1} faq={faq} />
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
