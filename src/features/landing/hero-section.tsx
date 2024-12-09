'use client'

import Link from 'next/link'
import * as React from 'react'
import { motion } from 'motion/react'

export function HeroSection(): React.ReactElement<any> {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col text-2xl tablet:text-3xl laptop:text-3xl !leading-relaxed font-medium gap-6 tablet:gap-10 text-pretty">
        <motion.h2
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
          viewport={{ once: true, margin: '-30% 0px' }}
        >
          We build world-class{' '}
          <div className="inline-flex text-pink-600 cursor-pointer group gap-3 relative w-[72px] hover:w-28 overflow-hidden transition-all duration-700 items-center">
            sites
            <i className="opacity-0 fi fi-rr-globe transition-all duration-700 group-hover:opacity-100 text-foreground text-xl animate-spin" />
          </div>{' '}
          for growing startups, agencies, & enterprises.
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
          viewport={{ once: true, margin: '-30% 0px' }}
        >
          We're passionate to helping founders to showcase how good their
          <div className="inline-flex justify-center items-center bg-surface h-12 w-12 rounded-2xl border border-border mx-3 p-1 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:rotate-45">
            <div className="flex justify-center items-center border border-border rounded-xl w-full h-full">
              <i className="fi fi-sr-shopping-bag" />
            </div>
          </div>
          products really are.
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
          viewport={{ once: true, margin: '-30% 0px' }}
        >
          Involves the site with better{' '}
          <div className="group inline-flex items-center mx-2 cursor-pointer transition-all duration-300 hover:scale-110">
            <i className="fi fi-sr-heart text-2xl transition-all duration-700 group-hover:-translate-y-1 group-hover:-rotate-45 text-rose-600" />
          </div>
          <span className="inline-flex transition-all duration-300 hover:scale-95 cursor-pointer text-fuchsia-600">
            design
          </span>
          ,{' '}
          <span className="inline-flex transition-all duration-300 hover:scale-95 cursor-pointer text-orange-600">
            copywriting
          </span>
          ,{' '}
          <span className="inline-flex transition-all duration-300 hover:scale-95 cursor-pointer text-blue-600">
            branding
          </span>
          ,{' '}
          <span className="inline-flex transition-all duration-300 hover:scale-95 cursor-pointer text-pink-600">
            interactions
          </span>
          .{' '}
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
          viewport={{ once: true, margin: '-30% 0px' }}
        >
          Build the perfect site for your business.
          <motion.span
            initial={{ opacity: 0.1, width: 0, margin: '0 0' }}
            whileInView={{ opacity: 1, width: '40px', margin: '0 12px' }}
            transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
            viewport={{ once: true, margin: '-30% 0px' }}
            whileHover={{ scale: 1.2 }}
            className="inline-flex items-center justify-center h-10 w-10 cursor-pointer"
          >
            <i className="fi fi-rr-percent-100 text-3xl text-emerald-500" />
          </motion.span>
          We move fast, while ensuring the highest level of craft.
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
          viewport={{ once: true, margin: '-30% 0px' }}
        >
          The result, you got{' '}
          <motion.span
            initial={{ opacity: 0.1, width: 0, margin: '0 0' }}
            whileInView={{ opacity: 1, width: '40px', margin: '0 12px' }}
            transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
            viewport={{ once: true, margin: '-30% 0px' }}
            whileHover={{ scale: 1.2 }}
            className="inline-flex items-center justify-center cursor-pointer"
          >
            <i className="fi fi-sr-arrow-trend-up text-3xl" />
          </motion.span>
          <span className="cursor-pointer text-fuchsia-600">more buyers</span>,{' '}
          <span className="cursor-pointer text-orange-600"> doubled sales</span>
          , & <span className="cursor-pointer text-blue-600">more leads</span>.
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
          viewport={{ once: true, margin: '-30% 0px' }}
        >
          We offer whatever you need to grow your business. Partners, white
          labels, in house, or contract.
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
          viewport={{ once: true, margin: '-30% 0px' }}
        >
          You can start with a basic{' '}
          <Link href={'/plans'} className="text-pink-600 underline">
            plans
          </Link>
          <motion.span
            initial={{ opacity: 0.1, width: 0, margin: '0 0' }}
            whileInView={{ opacity: 1, width: '40px', margin: '0 12px' }}
            transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
            viewport={{ once: true, margin: '-30% 0px' }}
            whileHover={{ scale: 1.2 }}
            className="inline-flex items-center justify-center cursor-pointer"
          >
            <i className="fi fi-rr-piggy-bank text-3xl" />
          </motion.span>{' '}
          and scale up as your business grows.
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
          viewport={{ once: true, margin: '-30% 0px' }}
        >
          Now, you can have a better and impactful website with just one action.
          <br />
          <br />
          <Link href={'/contact'} className="underline">
            Get started now.
          </Link>
        </motion.h2>
      </div>
    </section>
  )
}
