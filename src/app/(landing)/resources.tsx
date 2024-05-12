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
        'flex flex-col col-span-2 w-full h-[257px] bg-background rounded-3xl p-7 cursor-pointer transition-all duration-700 hover:-translate-y-2 border border-border',
        className,
      )}
    >
      <h4 className="text-xl font-medium leading-tight font-heading">
        {title}
      </h4>
      <span
        className={classMerge(
          'text-base font-medium leading-relaxed opacity-60 mt-3',
          className?.includes('col-span-4') ? 'w-8/12' : '',
        )}
      >
        {description}
      </span>

      <div className="flex flex-grow"></div>

      <div className="flex">
        <Button asChild variant={'text-primary'} size={'sm'}>
          <Link href={link ?? '/'}>
            See Details <ArrowRightIcon className="stroke-primary" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

function GridList(): React.ReactElement {
  return (
    <div className="mt-40 grid grid-cols-2 laptop:grid-cols-6 desktop:grid-cols-8 gap-5">
      <CardItem
        title="Templates"
        description="Get amazing template to start for wix studio, framer, webflow, and shopify."
        link=""
      />
      <CardItem
        title="Newsletter"
        description="Get weekly updates about trend, resources, tools, tips and tricks."
        link=""
        className="desktop:col-span-4"
      />
      <CardItem
        title="Community"
        description="Join online community of web designer around the world."
        link=""
      />
      <CardItem
        title="Guides"
        description="Learn how to become web designer, tips, and tricks to run business."
        link=""
        className="desktop:col-span-4"
      />
      <CardItem
        title="Podcast"
        description="Start listening to web design podcast, you may missing someone voice."
        link=""
      />
      <CardItem
        title="Goodies"
        description="Buy and get free goodies for web designer, sticker, ebooks, resources."
        link=""
      />
    </div>
  )
}

export default function Resources(): Readonly<React.ReactElement> {
  return (
    <section className="relative">
      <div className="absolute">
        <StrokeLineBackground />
      </div>

      <div className="px-5 laptop:px-0 container mx-auto py-36 relative">
        <div className="flex flex-col">
          <div className="flex">
            <SectionLabel>Resources</SectionLabel>
          </div>
          <h2 className="text-5xl laptop:text-7xl !leading-tight font-medium font-heading desktop:w-8/12 mt-10">
            New updates & resources for a better one
          </h2>

          <div className="flex gap-28 mt-14">
            <p className="desktop:w-1/2 text-lg font-medium leading-relaxed">
              Business around the world may have the same problems and the same
              questions as you. Check the commonly asked question by the people
              and business owner.
            </p>
          </div>

          <GridList />
        </div>
      </div>
    </section>
  )
}
