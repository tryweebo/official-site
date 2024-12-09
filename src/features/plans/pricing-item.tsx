import * as React from 'react'
import { motion } from 'motion/react'
import { Button } from '@shared/components'
import Link from 'next/link'

export type PricingData = {
  name: string
  price: string
  label: string
  description: string
  features: string[]
}

type PricingItemProps = {
  data: PricingData
}

export function PricingItem({ data }: PricingItemProps): React.ReactElement {
  const { name, price, label, description, features } = data

  return (
    <motion.div
      initial={{ opacity: 0, y: 200, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 0.98 }}
      transition={{ type: 'spring', duration: 1.2 }}
      viewport={{ once: true, margin: '-28% 0px' }}
      className="flex flex-col col-span-1 bg-surface p-1 rounded-2xl border border-border cursor-pointer"
    >
      <div className="flex flex-col p-4 w-full border border-border rounded-xl">
        <h3 className="font-medium !leading-none text-base">{name}</h3>

        <div className="flex flex-col gap-3 mt-8">
          <span className="text-3xl font-medium">{price}</span>
          <span className="text-foreground/60 text-sm">{label}</span>
        </div>

        <span className="!leading-relaxed text-sm mt-6 text-balance">
          {description}
        </span>

        <ul className="flex flex-col gap-3 text-sm mt-8 ml-3">
          {features.map((feature, featureIndex) => (
            <li
              key={featureIndex}
              className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1"
            >
              <i className="fi fi-sr-circle-small" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex items-center mt-16 justify-end gap-3">
          <Button
            asChild
            size={'sm'}
            variant={'secondary'}
            className="transition-all duration-300 hover:-translate-y-1"
          >
            <Link href={'/services'}>Learn More</Link>
          </Button>

          <Button
            asChild
            size={'sm'}
            className="transition-all duration-300 hover:-translate-y-1"
          >
            <Link href={'/contact'}>
              Get Started <i className="fi fi-rr-arrow-right" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
