import * as motion from "motion/react-client";
import type * as React from "react";

export function MissionSection(): React.ReactElement {
  return (
    <motion.section
      className="flex flex-col items-center py-20"
      id="mission"
      initial={{ opacity: 0, y: 200 }}
      transition={{
        type: "spring",
        damping: 8,
        stiffness: 60,
        ease: "easeInOut",
        duration: 1.2,
      }}
      viewport={{ once: true, margin: "0% 0% -30% 0%" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <span className="font-heading font-medium text-foreground/40 text-sm">
        Mission
      </span>

      <h2 className="group mt-8 laptop:w-9/12 text-center font-heading font-semibold text-4xl leading-tight">
        Make it big deals
        <br />
        with no bloated fees
      </h2>

      <div className="mt-16 flex tablet:w-10/12 w-full items-center justify-center gap-5">
        <ul className="flex flex-col gap-4">
          <li className="flex cursor-pointer items-center gap-3 text-foreground/60 transition-all duration-300 hover:text-foreground">
            <i className="fi fi-sc-check-circle text-foreground/40" />
            10x Team scale up
          </li>
          <li className="flex cursor-pointer items-center gap-3 text-foreground/60 transition-all duration-300 hover:text-foreground">
            <i className="fi fi-sc-check-circle text-foreground/40" />
            Best white label partner
          </li>
          <li className="flex cursor-pointer items-center gap-3 text-foreground/60 transition-all duration-300 hover:text-foreground">
            <i className="fi fi-sc-check-circle text-foreground/40" />
            No cost surprises
          </li>
          <li className="flex cursor-pointer items-center gap-3 text-foreground/60 transition-all duration-300 hover:text-foreground">
            <i className="fi fi-sc-check-circle text-foreground/40" />
            Fast turnarounds
          </li>
          <li className="flex cursor-pointer items-center gap-3 text-foreground/60 transition-all duration-300 hover:text-foreground">
            <i className="fi fi-sc-check-circle text-foreground/40" />
            Professional quality
          </li>
          <li className="flex cursor-pointer items-center gap-3 text-foreground/60 transition-all duration-300 hover:text-foreground">
            <i className="fi fi-sc-check-circle text-foreground/40" />
            Years experiences
          </li>
          <li className="flex cursor-pointer items-center gap-3 text-foreground/60 transition-all duration-300 hover:text-foreground">
            <i className="fi fi-sc-check-circle text-foreground/40" />
            No risk
          </li>
          <li className="flex cursor-pointer items-center gap-3 text-foreground/60 transition-all duration-300 hover:text-foreground">
            <i className="fi fi-sc-check-circle text-foreground/40" />
            Satisfaction guaranteed
          </li>
        </ul>
      </div>
    </motion.section>
  );
}
