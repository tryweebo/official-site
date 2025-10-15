import * as motion from "motion/react-client"
import * as React from "react"

export function BenefitSection(): React.ReactElement {
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
      id="benefit"
    >
      <span className="text-sm text-foreground/40 font-heading font-medium">
        Why choose us
      </span>

      <h2 className="text-4xl font-semibold font-heading text-center leading-tight group laptop:w-9/12 mt-8">
        Website done without
        <br />
        the headache
      </h2>

      <div className="flex items-center gap-5 mt-16">
        <ul className="flex flex-col px-3 py-5 gap-4">
          <li className="flex gap-2 text-foreground/60 hover:text-foreground cursor-pointer">
            <i className="fi fi-sc-check-circle text-foreground/40" />
            Pick what platform you need
          </li>

          <li className="flex gap-2 text-foreground/60 hover:text-foreground cursor-pointer">
            <i className="fi fi-sc-check-circle text-foreground/40" />
            Responsive and fast communication
          </li>

          <li className="flex gap-2 text-foreground/60 hover:text-foreground cursor-pointer">
            <i className="fi fi-sc-check-circle text-foreground/40" />
            Simple and streamline process
          </li>
          <li className="flex gap-2 text-foreground/60 hover:text-foreground cursor-pointer">
            <i className="fi fi-sc-check-circle text-foreground/40" />
            Transparent pricing & no hidden fees
          </li>
          <li className="flex gap-2 text-foreground/60 hover:text-foreground cursor-pointer">
            <i className="fi fi-sc-check-circle text-foreground/40" />
            World class sites works
          </li>

          <li className="flex gap-2 text-foreground/60 hover:text-foreground cursor-pointer">
            <i className="fi fi-sc-check-circle text-foreground/40" />
            Unlimited revisions and feedbacks
          </li>
          <li className="flex gap-2 text-foreground/60 hover:text-foreground cursor-pointer">
            <i className="fi fi-sc-check-circle text-foreground/40" />
            No hiring, no commitment
          </li>
          <li className="flex gap-2 text-foreground/60 hover:text-foreground cursor-pointer">
            <i className="fi fi-sc-check-circle text-foreground/40" />
            No vendor and partner lock in
          </li>
          <li className="flex gap-2 text-foreground/60 hover:text-foreground cursor-pointer">
            <i className="fi fi-sc-check-circle text-foreground/40" />
            Support white label partner
          </li>
        </ul>
      </div>
    </motion.section>
  )
}
