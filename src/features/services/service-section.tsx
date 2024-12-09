'use client'

import * as React from 'react'
import { motion } from 'motion/react'
import data from './service-data.json'
import { ServiceItem } from './service-item'

const services: string[] = data.services as string[]

export function ServiceSection(): React.ReactElement<any> {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-6 tablet:gap-10">
        <motion.h2
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
          viewport={{ once: true, margin: '-30% 0px' }}
          className="text-2xl tablet:text-3xl laptop:text-3xl !leading-tight font-medium text-balance"
        >
          We only focus to create
          <br />
          better sites.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
          viewport={{ once: true, margin: '-30% 0px' }}
          className="flex flex-wrap gap-3"
        >
          {services.map((service, index) => (
            <ServiceItem key={index} data={{ title: service }} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
