'use client'

import { animate, inView, motion, scroll } from 'framer-motion'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { classMerge } from '~/utils/helpers'
import SectionLabel from '~/components/ui/section-label'

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
  useEffect(() => {
    inView('[data-scroll=services-list-scroll]', () => {
      scroll((progress) => {
        animate('[data-scroll=services-list]', { x: -progress })
      })
    })
  }, [])

  return (
    <section className="relative">
      <div className="absolute">
        <svg
          width="757"
          height="757"
          viewBox="0 0 757 757"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1V756M42.9231 1V756M84.8462 1V756M126.769 1V756M168.692 1V756M210.615 1V756M252.538 1V756M294.462 1V756M336.385 1V756M378.308 1V756M420.231 1V756M462.154 1V756M504.077 1V756M546 1V756M587.923 1V756M629.846 1V756M671.769 1V756M713.692 1V756M755.615 1V756M1.38462 756H756M1.38462 714.055H756M1.38462 672.111H756M1.38462 630.167H756M1.38462 588.222H756M1.38462 546.278H756M1.38462 504.333H756M1.38462 462.389H756M1.38462 420.444H756M1.38462 378.5H756M1.38462 336.556H756M1.38462 294.611H756M1.38462 252.667H756M1.38462 210.722H756M1.38462 168.778H756M1.38462 126.833H756M1.38462 84.8889H756M1.38462 42.9444H756M1.38462 1L756 1"
            stroke="url(#paint0_radial_18_15)"
            stroke-opacity="0.23"
            stroke-width="0.908544"
          />
          <defs>
            <radialGradient
              id="paint0_radial_18_15"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(378.048 340.072) rotate(89.9377) scale(415.928)"
            >
              <stop stop-opacity="0.39" />
              <stop offset="1" stop-color="#666666" stop-opacity="0.1" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="container mx-auto py-36 relative">
        <div className="flex flex-col">
          <div className="flex">
            <SectionLabel>What we do</SectionLabel>
          </div>
          <motion.h2
            initial={{
              opacity: 0,
              y: 150,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: 'easeOut',
            }}
            className="text-7xl !leading-tight font-medium font-heading desktop:w-8/12 mt-10"
          >
            Focus on built, update, scale & maintain website
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              y: 150,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.7,
              ease: 'easeOut',
            }}
            className="text-lg font-medium leading-relaxed desktop:w-6/12 mt-8"
          >
            We help you create, redesign, update, change style, refresh migrate
            website. We do everything, so you can focus on your goals and
            scaling. We are commit to focus on design and develop web for
            future.
          </motion.p>

          <div
            className="relative mt-40 w-screen"
            data-scroll="services-list-scroll"
          >
            <div className="flex overflow-hidden w-full sticky top-0">
              <div
                className="flex flex-row gap-6 flex-nowrap"
                data-scroll="services-list"
              >
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
