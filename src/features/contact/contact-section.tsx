'use client'

import * as React from 'react'
import { motion } from 'motion/react'
import { Button } from '@shared/components'
import Link from 'next/link'

export function ContactSection(): React.ReactElement<any> {
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
          Don't overhtink it. We help you make better sites.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
          viewport={{ once: true, margin: '-30% 0px' }}
          className="flex w-full"
        >
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              variant={'outline'}
              className="transition-all duration-300 hover:-translate-y-1"
            >
              <Link
                href={'https://cal.com/nyomansunima/tryweebo-start-website'}
                target="_blank"
              >
                Book a Call
              </Link>
            </Button>

            <Button
              asChild
              variant={'outline'}
              className="transition-all duration-300 hover:-translate-y-1"
            >
              <Link href={'mailto:nyomansunima@gmail.com'} target="_blank">
                Send email
              </Link>
            </Button>

            <Button
              asChild
              variant={'outline'}
              className="transition-all duration-300 hover:-translate-y-1"
            >
              <Link href={'https://twitter.com/nyomansunima'} target="_blank">
                Send me quote (Twitter)
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
