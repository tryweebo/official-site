'use client'

import React from 'react'
import SectionLabel from '~/components/ui/section-label'
import { StrokeLineBackground } from '~/components/common/bg'
import Image from 'next/image'

interface CardItemProps {
  image: string
  title: string
  description: string
}

function CardItem({
  title,
  description,
  image,
}: CardItemProps): React.ReactElement {
  return (
    <div
      className={
        'flex flex-col w-9/12 tablet:w-1/5 bg-background border border-border rounded-3xl p-6 cursor-pointer transition-all duration-700 hover:-translate-y-2'
      }
    >
      <h4 className="text-lg font-medium font-heading !leading-tight opacity-70">
        {title}
      </h4>

      <div className="flex justify-center mt-16">
        <div className="flex justify-center items-center p-1 border border-border rounded-[36px]">
          <Image
            src={image}
            alt={title}
            width={90}
            height={90}
            quality={100}
            className="rounded-4xl overflow-hidden"
          />
        </div>
      </div>

      <span className="text-lg !leading-relaxed font-medium text-end mt-10">
        {description}
      </span>
    </div>
  )
}

function GridList() {
  return (
    <div className="flex flex-wrap justify-center mt-36 gap-5">
      <CardItem
        title="FOUNDER"
        description="Nyoman Sunima"
        image="/images/teams/nyomansunima.png"
      />
      <CardItem
        title="SOMEONE"
        description="Coming Soon"
        image="/images/teams/placeholder.png"
      />
    </div>
  )
}

export default function Teams(): Readonly<React.ReactElement> {
  return (
    <section className="relative flex justify-center">
      <div className="absolute">
        <StrokeLineBackground />
      </div>
      <div className="px-5 laptop:px-0 container mx-auto py-36 relative">
        <div className="flex flex-col items-center mx-auto">
          <div className="flex justify-center">
            <SectionLabel>Teams</SectionLabel>
          </div>
          <h2 className="text-5xl laptop:text-7xl !leading-tight font-medium font-heading desktop:w-7/12 mt-10 text-center">
            Meet with our fast, legendary teams
          </h2>

          <div className="flex gap-28 mt-14 justify-center laptop:w-5/12">
            <p className="text-lg font-medium leading-relaxed text-center">
              We collaborate and focus on creating better result. We just ship
              and create website for the future.
            </p>
          </div>
        </div>

        <GridList />
      </div>
    </section>
  )
}
