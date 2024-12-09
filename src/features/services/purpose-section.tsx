'use client'

import * as React from 'react'
import { motion } from 'motion/react'
import { PurposeData, PurposeItem } from './purpose-item'
import data from './service-data.json'

const purposes = data.purposes as PurposeData[]

export function PurposeSection(): React.ReactElement<any> {
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
          We love collaboration, It's may fits with your sites project.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
          viewport={{ once: true, margin: '-30% 0px' }}
          className="flex flex-wrap gap-3"
        >
          <div className="w-full grid grid-cols-1 tablet:grid-cols-2 gap-3">
            {purposes.map((purpose, index) => (
              <PurposeItem data={purpose} key={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
