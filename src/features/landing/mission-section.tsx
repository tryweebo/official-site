import * as React from "react"
import * as motion from "motion/react-client"

export function MissionSection(): React.ReactElement {
  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        damping: 8,
        stiffness: 60,
        ease: "easeInOut",
        duration: "1.2",
      }}
      viewport={{ once: true, margin: "0% 0% -30% 0%" }}
      className="flex flex-col items-center py-20"
      id="mission"
    >
      <span className="text-sm text-foreground/40 font-heading font-medium">
        Mission
      </span>

      <h2 className="text-4xl font-semibold font-heading text-center leading-tight group laptop:w-9/12 mt-8">
        Make it big deals
        <br />
        with no bloated fees
      </h2>

      <div className="flex items-center justify-center gap-5 mt-16 w-full tablet:w-10/12">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-all duration-300 cursor-pointer">
            <i className="fi fi-sr-bullet" />
            <i className="fi fi-br-arrow-trend-up" />
            10x Team scale up
          </li>
          <li className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-all duration-300 cursor-pointer">
            <i className="fi fi-sr-bullet" />
            <i className="fi fi-br-sticker" />
            Best white label partner
          </li>
          <li className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-all duration-300 cursor-pointer">
            <i className="fi fi-sr-bullet" />
            <i className="fi fi-br-surprise" />
            No cost surprises
          </li>
          <li className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-all duration-300 cursor-pointer">
            <i className="fi fi-sr-bullet" />
            <i className="fi fi-br-clock" />
            Fast turnarounds
          </li>
          <li className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-all duration-300 cursor-pointer">
            <i className="fi fi-sr-bullet" />
            <i className="fi fi-br-hand-wave" />
            Professional quality
          </li>
          <li className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-all duration-300 cursor-pointer">
            <i className="fi fi-sr-bullet" />
            <i className="fi fi-br-globe" />
            Years experiences
          </li>
          <li className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-all duration-300 cursor-pointer">
            <i className="fi fi-sr-bullet" />
            <i className="fi fi-br-shield-check" />
            No risk
          </li>
          <li className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-all duration-300 cursor-pointer">
            <i className="fi fi-sr-bullet" />
            <i className="fi fi-br-first-award" />
            Satisfaction guaranteed
          </li>
        </ul>
      </div>
    </motion.section>
  )
}
