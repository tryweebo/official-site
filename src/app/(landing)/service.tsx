'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { classMerge } from '~/utils/helpers'
import SectionLabel from '~/components/ui/section-label'
import { StrokeLineBackground } from '~/components/common/bg'

interface CardItemProps {
  image: string
  title: string
  description: string
  className?: string
}

// card item for the slide section
// that show the services
function CardItem({
  description,
  image,
  title,
  className,
}: CardItemProps): React.ReactElement {
  return (
    <div
      className={classMerge(
        'flex flex-col w-[373px] bg-secondary rounded-4xl p-7 cursor-pointer transition-all duration-700 hover:-translate-y-2',
        className,
      )}
    >
      <h4 className="text-2xl font-medium font-heading !leading-tight">
        {title}
      </h4>
      <span className="text-base !leading-relaxed mt-4 font-medium text-opacity-90">
        {description}
      </span>
      <Image
        src={image}
        alt={title}
        width={104}
        height={104}
        quality={100}
        className="mt-20 place-self-end"
      />
    </div>
  )
}

export default function Service(): Readonly<React.ReactElement> {
  return (
    <section className="relative">
      <div className="absolute">
        <StrokeLineBackground />
      </div>

      <div className="px-5 laptop:px-0 container mx-auto py-36 relative">
        <div className="flex flex-col">
          <div className="flex">
            <SectionLabel>What we do</SectionLabel>
          </div>
          <h2 className="text-5xl laptop:text-7xl !leading-tight font-medium font-heading desktop:w-8/12 mt-10">
            Focus on built, update, scale & maintain website
          </h2>
          <p className="text-lg font-medium leading-relaxed desktop:w-6/12 mt-8">
            We help you create, redesign, update, change style, refresh migrate
            website. We do everything, so you can focus on your goals and
            scaling. We are commit to focus on design and develop web for
            future.
          </p>

          <div className="relative mt-40 w-screen">
            <div className="flex overflow-hidden w-full sticky top-0">
              <div className="flex flex-row gap-6 flex-nowrap">
                <CardItem
                  image="/images/illustration/outre-13.png"
                  title="Redesigns"
                  description="Redesign your current website with fresh, modern, and new style. Combine with high converting copy to reach more user, customers and audiences."
                  className="col-start-2"
                />
                <CardItem
                  image="/images/illustration/outre-5.png"
                  title="Migrations"
                  description="Redesign your current website with fresh, modern, and new style. Combine with high converting copy to reach more user, customers and audiences."
                />
                <CardItem
                  image="/images/illustration/outre-6.png"
                  title="Build & scale"
                  description="Redesign your current website with fresh, modern, and new style. Combine with high converting copy to reach more user, customers and audiences."
                />
                <CardItem
                  image="/images/illustration/outre-3.png"
                  title="Maintenance"
                  description="Redesign your current website with fresh, modern, and new style. Combine with high converting copy to reach more user, customers and audiences."
                />
                <CardItem
                  image="/images/illustration/outre-8.png"
                  title="Optimize & SEO"
                  description="Redesign your current website with fresh, modern, and new style. Combine with high converting copy to reach more user, customers and audiences."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
