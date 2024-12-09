'use client'

import * as React from 'react'
import { motion } from 'motion/react'
import { PricingData, PricingItem } from './pricing-item'
import data from './plans-data.json'

const pricings = data.pricings as PricingData[]

export function PricingSection(): React.ReactElement<any> {
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
          We offer simple plans
          <br />
          so you can pick your fits.
        </motion.h2>

        <div className="grid grid-cols-1 gap-3">
          {pricings.map((pricing, index) => (
            <PricingItem data={pricing} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
