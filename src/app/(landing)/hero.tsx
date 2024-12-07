import Link from 'next/link'
import * as React from 'react'

export function HeroSection(): React.ReactElement<any> {
  return (
    <section className="flex flex-col py-20 laptop:pb-56">
      <div className="flex flex-col text-2xl tablet:text-3xl laptop:text-3xl !leading-normal font-medium gap-6 laptop:gap-16">
        <h2>
          We build <span className="text-orange-600">world-class</span> sites
          for growing startups, agencies, & enterprises. We're passionate to
          helping founders to showcase how good their products really are.
        </h2>
        <h2>
          Involves the site with{' '}
          <span className="cursor-pointer text-fuchsia-600">design</span>,{' '}
          <span className="cursor-pointer text-orange-600">copywriting</span>,{' '}
          <span className="cursor-pointer text-blue-600">branding</span>,{' '}
          <span className="cursor-pointer text-pink-600">interactions</span>.{' '}
        </h2>
        <h2>
          Build the perfect site for your product. We move fast, while ensuring
          the highest level of craft, attention to detail and performance.
        </h2>
        <h2>
          The result, you got{' '}
          <span className="cursor-pointer text-fuchsia-600">more buyers</span>,{' '}
          <span className="cursor-pointer text-orange-600"> doubled sales</span>
          , & <span className="cursor-pointer text-blue-600">more leads</span>.
        </h2>
        <h2>
          We're flexible in{' '}
          <Link href={'/plans'} className="underline">
            plans
          </Link>
          . So you can pick which one is suited to yours.
        </h2>
        <h2>
          You can deserves a better site now.
          <br />
          <Link href={'/contact'} className="underline">
            Get started
          </Link>
        </h2>
      </div>
    </section>
  )
}
