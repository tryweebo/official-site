import { Button } from '@shared/components'
import Link from 'next/link'
import * as React from 'react'
import * as motion from 'motion/react-client'

export function CTASection(): React.ReactElement {
  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        damping: 8,
        stiffness: 60,
        ease: 'easeInOut',
        duration: '1.2',
      }}
      viewport={{ once: true, margin: '0% 0% -30% 0%' }}
      className="flex flex-col items-center py-20"
      id="cta"
    >
      <span className="text-sm text-foreground/40 font-mono">Get Started.</span>

      <h2 className="text-3xl font-semibold text-center leading-tight group laptop:w-9/12 mt-8">
        What you're waiting for?
        <br />
        <span className="text-foreground/30">start now.</span>
      </h2>

      <div className="flex items-center gap-5 mt-16">
        <Button
          asChild
          className="transition-all duration-300 hover:-translate-y-1"
        >
          <Link
            href={'https://cal.com/nyomansunima/weebo-intro-call'}
            target="_blank"
          >
            Get Started
            <i className="fi fi-br-bookmark" />
          </Link>
        </Button>
        <Button
          asChild
          className="transition-all duration-300 hover:-translate-y-1"
          variant={'outline'}
        >
          <Link href={'#plans'}>
            See Plans
            <i className="fi fi-br-heart" />
          </Link>
        </Button>
      </div>
    </motion.section>
  )
}
