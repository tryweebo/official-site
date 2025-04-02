import { Button } from '@shared/components'
import Link from 'next/link'
import * as React from 'react'

export function HeroSection(): React.ReactElement {
  return (
    <section
      className="flex flex-col items-center tablet:pt-10 pb-20"
      id="hero"
    >
      <span className="text-sm text-center flex items-center gap-2 text-blue-700 cursor-pointer font-heading font-medium">
        Available now
      </span>

      <h2 className="text-4xl font-semibold font-heading text-center leading-tight group tablet:w-8/12 laptop:w-9/12 mt-8">
        Web design & development partner on the go
      </h2>

      <p className="text-center text-foreground/50 w-full tablet:w-7/12 mx-auto mt-10 text-pretty">
        Helping startups, founders, agencies, and enterprises build their on
        demand website with no lacks
      </p>

      <div className="flex items-center justify-center gap-6 flex-wrap mt-10">
        <span className="flex items-center gap-2 text-sm text-foreground/60 cursor-pointer transition-all duration-300 hover:-translate-y-1">
          <i className="fi fi-ss-check-circle text-green-600" />
          Quick delivery
        </span>
        <span className="flex items-center gap-2 text-sm text-foreground/60 cursor-pointer transition-all duration-300 hover:-translate-y-1">
          <i className="fi fi-ss-check-circle text-green-600" />
          Cancel anytime
        </span>
        <span className="flex items-center gap-2 text-sm text-foreground/60 cursor-pointer transition-all duration-300 hover:-translate-y-1">
          <i className="fi fi-ss-check-circle text-green-600" />
          Transparent pricing
        </span>
      </div>

      <div className="flex items-center gap-5 mt-16">
        <Button
          asChild
          size={'lg'}
          className="transition-all duration-300 hover:-translate-y-1"
        >
          <Link
            href={'https://cal.com/nyomansunima/weebo-intro-call'}
            target="_blank"
          >
            Get Started
            <i className="fi fi-br-location-arrow" />
          </Link>
        </Button>
        <Button
          asChild
          size={'lg'}
          className="transition-all duration-300 hover:-translate-y-1"
          variant={'outline'}
        >
          <Link href={'#plans'}>
            See Plans
            <i className="fi fi-br-heart" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
