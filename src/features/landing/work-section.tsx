import * as motion from "motion/react-client"
import * as React from "react"

interface Work {
  title: string
  tags: string
  image: string
  url: string
}

const works: Work[] = [
  {
    title: "Automatic Nation",
    tags: "Landing page, Design & development",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1742194102456/4a0d3032-0850-4b15-a224-bf3b28fad889.webp",
    url: "https://automaticnation.com",
  },
  {
    title: "Guna Transport",
    tags: "Transportation, Design & development",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1742194112744/f49f3583-86cb-458e-b990-fc76e7ab6873.webp",
    url: "https://www.gunatransport.com",
  },
]

function WorkItem({ work }: { work: Work }): React.ReactElement {
  const { title, tags, image, url } = work

  return (
    <a
      href={url}
      target="_blank"
      className="flex flex-col rounded-2xl p-3 pb-5 w-full group transition-all duration-300 hover:-translate-y-2 relative group"
    >
      <div className="relative w-full h-[220px] tablet:h-[420px] overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="object-cover transition-all durat700 group-hover:scale-105 h-full w-full"
        />
      </div>

      <h3 className="font-medium text-lg mt-6">{title}</h3>
      <span className="text-sm text-foreground/60 mt-2">{tags}</span>
    </a>
  )
}

export function WorkSection(): React.ReactElement {
  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        damping: 8,
        stiffness: 60,
        ease: "easeInOut",
        duration: 1.2,
      }}
      viewport={{ once: true, margin: "0% 0% -30% 0%" }}
      className="flex flex-col items-center py-20"
      id="works"
    >
      <span className="text-sm text-foreground/40 font-heading font-medium">
        Works
      </span>

      <h2 className="text-4xl font-semibold font-heading text-center leading-tight mt-8">
        We partner with big
        <br />
        ambitions teams
      </h2>

      <div className="flex flex-col items-center gap-12 mt-16 w-full tablet:w-10/12">
        {works.map((work, index) => (
          <WorkItem work={work} key={index} />
        ))}
      </div>
    </motion.section>
  )
}
