'use client'

import React from 'react'
import { classMerge } from '~/utils/helpers'
import SectionLabel from '~/components/ui/section-label'
import { StrokeLineBackground } from '~/components/common/bg'

interface CardItemProps {
  title: string
  label: string
  className?: string
}

function CardItem({
  title,
  label,
  className,
}: CardItemProps): React.ReactElement {
  return (
    <div
      className={classMerge(
        'flex flex-col col-span-1 justify-between w-full h-[350px] bg-secondary rounded-2xl p-7 cursor-pointer transition-all duration-700 hover:-translate-y-2',
        className,
      )}
    >
      <span className="text-base font-heading font-medium !leading-tight opacity-70 h-10 desktop:w-11/12">
        {label}
      </span>
      <h4 className="text-xl font-medium leading-tight opacity-90 desktop:w-8/12">
        {title}
      </h4>
    </div>
  )
}

function GridList(): React.ReactElement {
  return (
    <div className="mt-40 grid grid-cols-4 gap-6 w-11/12">
      <CardItem
        label="HELPING BRANDS STAND OUT"
        title="Achieving results since 2016"
        className="bg-[#FFD9CD]"
      />
      <CardItem
        label="REDUCE RESOURCES & COSTS"
        title="Redesign your current website with"
        className="bg-[#ECFFCD]"
      />
      <CardItem
        label="FAST & HIGH QUALITY DELIVER"
        title="Focus on quality and efficiency"
        className="bg-[#CDFFE5]"
      />
      <CardItem
        label="BETTER EXPERIENCES"
        title="Start & buy website like a product"
        className="bg-[#CDE9FF] col-start-2"
      />
      <CardItem
        label="COLLABORATION & COMMUNICATION IS KEY"
        title="A one stop shop for all your needs"
        className="bg-[#CDCDFF]"
      />
      <CardItem
        label="STARTUPS KNOWLEDGE"
        title="We understand iteration"
        className="bg-[#FACDFF]"
      />
    </div>
  )
}

export default function Benefits(): Readonly<React.ReactElement> {
  return (
    <section className="relative">
      <div className="absolute">
        <StrokeLineBackground />
      </div>
      <div className="container mx-auto py-36 relative">
        <div className="flex flex-col">
          <div className="flex">
            <SectionLabel>Benefits</SectionLabel>
          </div>
          <h2 className="text-7xl !leading-tight font-medium font-heading desktop:w-9/12 mt-10">
            One stop solutions, big
            <br className="hidden desktop:block" />
            impact for scale and growth
          </h2>

          <div className="flex gap-28 mt-14">
            <p className="desktop:w-1/2 text-lg font-medium leading-relaxed">
              Investing in quality web design can give your online presence the
              competitive edge it needs to thrive in today's digital landscape.
              A professionally designed website can establish trust and
              credibility with visitors, while also improving user experience
              and driving higher engagement and conversions.
            </p>
            <p className="desktop:w-1/2 text-lg font-medium leading-relaxed">
              impression on your audience and enhance your brand reputation.
              What's more, an effective web design can improve your search
              engine visibility, bringing in more organic traffic and potential
              customers to your site.
            </p>
          </div>

          <GridList />
        </div>
      </div>
    </section>
  )
}
