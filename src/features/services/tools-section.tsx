'use client'

import * as React from 'react'
import { motion } from 'motion/react'
import data from './service-data.json'
import { ToolItem } from './tool-item'

const tools: string[] = data.tools as string[]

export function ToolsSection(): React.ReactElement<any> {
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
          We grow with the best and tested tools in the market.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
          viewport={{ once: true, margin: '-30% 0px' }}
          className="flex flex-wrap gap-3"
        >
          {tools.map((tool, index) => (
            <ToolItem key={index} data={{ title: tool }} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
