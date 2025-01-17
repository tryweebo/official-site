'use client'

import * as React from 'react'
import { motion } from 'motion/react'
import { WorkData, WorkItem } from './work-item'
import data from './work-data.json'
import dayjs from 'dayjs'

const works = data.works as WorkData[]
const sortedWorks = works.sort((a, b) =>
  dayjs(a.date).isAfter(dayjs(b.date)) ? -1 : 1,
)

export function WorkSection(): React.ReactElement<any> {
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
          Good projects from
          <br />
          our partners.
        </motion.h2>

        <div className="grid grid-cols-1 gap-3">
          {sortedWorks.map((work, index) => (
            <WorkItem key={index} work={work} />
          ))}
        </div>
      </div>
    </section>
  )
}
