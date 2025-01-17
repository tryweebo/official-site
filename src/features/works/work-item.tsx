'use client'

import * as React from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { parseReadableDate } from '@shared/utils'
import { useRouter } from 'next/navigation'

export type WorkData = {
  title: string
  description: string
  image: string
  link: string
  isDraft: boolean
  isFeatured?: boolean
  date: string
}

type WorkItemProps = {
  work: WorkData
}

export function WorkItem({ work }: WorkItemProps): React.ReactElement<any> {
  const { title, description, image, link, isDraft, isFeatured, date } = work
  const readableDate = parseReadableDate(date)

  const router = useRouter()

  function handleClick() {
    if (link.includes('https://')) {
      window.open(link, '_blank')
    } else {
      router.push(link)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 200, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', duration: 1.2 }}
      viewport={{ once: true, margin: '-28% 0px' }}
      onClick={handleClick}
      className="flex flex-col bg-surface border border-border rounded-2xl p-4 relative cursor-pointer group"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-base font-medium !leading-tight">{title}</h3>

        <div className="flex gap-4 items-center">
          {isFeatured && (
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-bounce" />
          )}
          <span className="text-sm text-foreground/60">{readableDate}</span>
          {isDraft && (
            <span className="text-xs font-medium text-rose-600 bg-rose-100 border border-rose-200 px-2 p-1 rounded-lg">
              Coming Soon
            </span>
          )}
        </div>
      </div>

      <p className="text-foreground/60 !leading-relaxed mt-5">{description}</p>

      <div className="flex border border-border rounded-xl p-1 mt-5">
        <picture className="relative overflow-hidden w-full h-[200px] tablet:h-[340px] rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            className="transition-all duration-700 group-hover:scale-105 object-cover"
          />
        </picture>
      </div>
    </motion.div>
  )
}
