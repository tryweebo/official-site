import * as motion from 'motion/react-client'
import * as React from 'react'

type Process = {
  title: string
  description: string
}

const processSteps: Process[] = [
  {
    title: '01. Pick a plan',
    description:
      "We keep things simple. Whether you need a new website, or simple updates, we've got you covered.",
  },
  {
    title: '02. Reseach & plans',
    description:
      "We'll help you figure out your website goals and what problems you are looking to solve, and then craft a plan to achieve them.",
  },
  {
    title: '03. Design & development',
    description:
      "Next, we'll create designs to solve the problems we identified in the planning stage. We'll do a couple concepts so you have some options. Once you’re completely happy with the design we’ll build it in Webflow, using all the latest features to make it super easy to update.",
  },
  {
    title: '04. Revision & iteration',
    description:
      'Time to revisions and matching the expectations with the results. We’ll make sure everything is perfect before we launch.',
  },
  {
    title: '05. Launch & support',
    description:
      "Time to launch. We'll transfer full ownership of the site to you, and then train you in how to use the site so you can easily manage it yourself.",
  },
]

function ProcessItem({ step }: { step: Process }): React.ReactElement {
  const { title, description } = step

  return (
    <div className="flex flex-col rounded-2xl p-1 w-full bg-surface border border-border group cursor-pointer transition-all duration-300 hover:-translate-y-4 hover:scale-105 -rotate-6 odd:rotate-6 hover:shadow-sm hover:odd:rotate-3 hover:-rotate-3 group">
      <div className="flex flex-col rounded-xl p-3 border-2 border-border border-dashed relative">
        <div className="flex items-center gap-2">
          <i className="fi fi-sr-bullet text-border group-hover:text-purple-500" />
          <h3 className="font-medium text-lg font-heading">{title}</h3>
        </div>
        <p className="text-foreground/60 leading-relaxed text-sm mt-4 pb-3">
          {description}
        </p>

        <i className="fi fi-sr-bullet absolute top-2 right-2 text-foreground/30" />
      </div>
    </div>
  )
}

export function ProcessSection(): React.ReactElement {
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
      id="how-it-works"
    >
      <span className="text-sm text-foreground/40 font-heading font-medium">
        How it works
      </span>

      <h2 className="text-4xl font-semibold font-heading text-center leading-tight group laptop:w-9/12 mt-8">
        Uncomplicated process
        <br />
        for amazing results
      </h2>

      <div className="flex flex-col items-center gap-5 mt-20 tablet:w-10/12 laptop:w-8/12 relative">
        <span className="border-l-2 border-border border-dashed h-full w-1 absolute" />

        {processSteps.map((step, index) => (
          <ProcessItem key={index} step={step} />
        ))}
      </div>
    </motion.section>
  )
}
