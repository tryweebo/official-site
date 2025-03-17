import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import * as motion from 'motion/react-client'

type Work = {
  title: string
  tags: string
  image: string
  url: string
}

const works: Work[] = [
  {
    title: 'Automatic Nation',
    tags: 'Landing page, Design & development',
    image:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1742194102456/4a0d3032-0850-4b15-a224-bf3b28fad889.webp',
    url: 'https://automaticnation.com',
  },
  {
    title: 'Guna Transport',
    tags: 'Transportation, Design & development',
    image:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1742194112744/f49f3583-86cb-458e-b990-fc76e7ab6873.webp',
    url: 'https://www.gunatransport.com',
  },
]

function WorkItem({ work }: { work: Work }): React.ReactElement {
  const { title, tags, image, url } = work

  return (
    <Link
      href={url}
      target="_blank"
      className="flex flex-col border border-border rounded-2xl p-3 pb-5 w-full group transition-all duration-300 hover:-translate-y-3 hover:scale-95 relative"
    >
      <picture className="relative w-full h-[220px] tablet:h-[420px] overflow-hidden rounded-lg border border-border">
        <Image src={image} alt={title} fill objectFit="cover" />
      </picture>

      <h3 className="font-medium text-lg mt-6">{title}</h3>
      <span className="text-sm text-foreground/50 mt-2">{tags}</span>

      <i className="fi fi-rr-globe absolute right-6 bottom-6 text-lg animate-spin transition-all duration-300 opacity-0 group-hover:opacity-100 duration-1000" />
    </Link>
  )
}

export function WorkSection(): React.ReactElement {
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
      id="works"
    >
      <span className="text-sm text-foreground/40 font-mono">Works.</span>

      <h2 className="text-3xl font-semibold text-center leading-tight mt-8">
        We partner with big
        <br />
        <span className="text-foreground/30">ambitions teams</span>
      </h2>

      <div className="flex flex-col items-center gap-5 mt-16 w-full laptop:w-10/12">
        {works.map((work, index) => (
          <WorkItem work={work} key={index} />
        ))}
      </div>
    </motion.section>
  )
}
