'use client'

import * as React from 'react'
import { motion } from 'motion/react'
import data from './service-data.json'
import { TypeItem } from './type-item'

const types: string[] = data.types as string[]

export function TypesSection(): React.ReactElement<any> {
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
          We offer more than just a website, we support all of your needs.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
          viewport={{ once: true, margin: '-30% 0px' }}
          className="flex flex-wrap gap-3"
        >
          {types.map((type, index) => (
            <TypeItem key={index} data={{ title: type }} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
