'use client'

import React from 'react'
import { classMerge } from '~/utils/helpers'
import SectionLabel from '~/components/ui/section-label'
import { StrokeLineBackground } from '~/components/common/bg'
import { Button } from '~/components/ui/button'
import Link from 'next/link'
import { ArrowRightIcon } from '~/components/icon'

interface CardItemProps {
  title: string
  description: string
  className?: string
  link?: string
}

function CardItem({
  title,
  description,
  className,
  link,
}: CardItemProps): React.ReactElement {
  return (
    <div
      className={classMerge(
        'flex flex-col col-span-2 w-full bg-background rounded-3xl p-7 cursor-pointer transition-all duration-700 hover:-translate-y-2 border border-border',
        className,
      )}
    >
      <h4 className="text-xl font-medium leading-tight font-heading">
        {title}
      </h4>
      <span className="text-base font-medium leading-relaxed opacity-60 mt-3 desktop:w-8/12">
        {description}
      </span>

      <div className="flex mt-14">
        <Button asChild variant={'text-primary'} size={'sm'}>
          <Link href={link ?? '/'}>
            See details{' '}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.2498 12H4.25"
                className="stroke-primary"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
              <path
                d="M14.5901 17.66C14.5901 14.7503 17.1527 12 20.2502 12"
                className="stroke-primary"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
              <path
                className="stroke-primary"
                d="M14.5901 6.33984C14.5901 9.24959 17.1527 11.9999 20.2502 11.9999"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
          </Link>
        </Button>
      </div>
    </div>
  )
}

function GridList(): React.ReactElement {
  return (
    <div className="mt-40 grid grid-cols-6 gap-6 w-9/12">
      <CardItem
        title="One off project"
        description="Best for build new one purpose website"
        link=""
      />
      <CardItem
        title="Unlimited projects"
        description="Best for agency, creative or marketing that need unlimited website"
        link=""
        className="col-span-4"
      />
      <CardItem
        title="Custom Offers"
        description="Create new collaboration with custom pricing and plan"
        link=""
        className="col-span-4"
      />
      <CardItem
        title="In-house & part time "
        description="Best to manage and maintain your current website"
        link=""
      />
    </div>
  )
}

export default function Offers(): Readonly<React.ReactElement> {
  return (
    <section className="relative flex justify-center">
      <div className="absolute">
        <StrokeLineBackground />
      </div>
      <div className="container mx-auto py-36 relative">
        <div className="flex flex-col items-center mx-auto">
          <div className="flex justify-center">
            <SectionLabel>Offers</SectionLabel>
          </div>
          <h2 className="text-7xl !leading-tight font-medium font-heading desktop:w-9/12 mt-10 text-center">
            One solutions, different plan and ways to start
          </h2>

          <div className="flex gap-28 mt-14 justify-center">
            <p className="desktop:w-1/2 text-lg font-medium leading-relaxed text-center">
              We provide multiple plans and ways to let you pick which one is
              your best suits and match with your preferences. We are flexible
              and easy to start.
            </p>
          </div>

          <GridList />

          <div className="flex justify-center mt-40">
            <Button asChild>
              <Link href={'/offer'}>
                See More Offers <ArrowRightIcon className="stroke-white" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
