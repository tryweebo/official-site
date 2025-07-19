import { Button } from "@shared/components"
import { Link } from "react-router"
import * as React from "react"
import * as motion from "motion/react-client"

export function CTASection(): React.ReactElement {
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
      id="cta"
    >
      <span className="text-sm text-foreground/40 font-heading font-medium">
        Get Started.
      </span>

      <h2 className="text-4xl font-semibold font-heading text-center leading-tight group laptop:w-9/12 mt-8">
        Let's move on
        <br />
        get spot
      </h2>

      <p className="text-center text-foreground/60 w-full tablet:w-7/12 mx-auto mt-10 text-pretty leading-7">
        We offer limited partner to work on. Secure your seat now and let us do
        your work.
      </p>

      <div className="flex items-center justify-center gap-6 flex-wrap mt-10">
        <span className="flex items-center gap-2 text-sm text-foreground/60 cursor-pointer transition-all duration-300 hover:-translate-y-1">
          <i className="fi fi-sc-check-circle text-green-600" />
          No shit
        </span>
        <span className="flex items-center gap-2 text-sm text-foreground/60 cursor-pointer transition-all duration-300 hover:-translate-y-1">
          <i className="fi fi-sc-check-circle text-green-600" />
          Quick meeting
        </span>
        <span className="flex items-center gap-2 text-sm text-foreground/60 cursor-pointer transition-all duration-300 hover:-translate-y-1">
          <i className="fi fi-sc-check-circle text-green-600" />
          Perfect spot
        </span>
      </div>

      <div className="flex items-center gap-5 mt-16">
        <Button
          asChild
          size={"lg"}
          className="transition-all duration-300 hover:-translate-y-1"
        >
          <Link
            to={"https://cal.com/nyomansunima/weebo-intro-call"}
            target="_blank"
          >
            Get the spot now
            <i className="fi fi-sr-location-arrow" />
          </Link>
        </Button>
      </div>
    </motion.section>
  )
}
