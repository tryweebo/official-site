import * as motion from "motion/react-client";
import type * as React from "react";

export function BenefitSection(): React.ReactElement {
  return (
    <motion.section
      className="flex flex-col items-center py-20"
      id="benefit"
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
        Why choose us
      </span>

      <h2 className="group mt-8 laptop:w-9/12 text-center font-heading font-semibold text-4xl leading-tight">
        Website done without
        <br />
        the headache
      </h2>

      <div className="mt-16 flex items-center gap-5">
        <ul className="flex flex-col gap-4 px-3 py-5">
          <li className="flex cursor-pointer gap-2 text-foreground/60 hover:text-foreground">
            <i className="fi fi-sc-check-circle text-foreground/40" />
            Pick what platform you need
          </li>

          <li className="flex cursor-pointer gap-2 text-foreground/60 hover:text-foreground">
            <i className="fi fi-sc-check-circle text-foreground/40" />
            Responsive and fast communication
          </li>

          <li className="flex cursor-pointer gap-2 text-foreground/60 hover:text-foreground">
            <i className="fi fi-sc-check-circle text-foreground/40" />
            Simple and streamline process
          </li>
          <li className="flex cursor-pointer gap-2 text-foreground/60 hover:text-foreground">
            <i className="fi fi-sc-check-circle text-foreground/40" />
            Transparent pricing & no hidden fees
          </li>
          <li className="flex cursor-pointer gap-2 text-foreground/60 hover:text-foreground">
            <i className="fi fi-sc-check-circle text-foreground/40" />
            World class sites works
          </li>

          <li className="flex cursor-pointer gap-2 text-foreground/60 hover:text-foreground">
            <i className="fi fi-sc-check-circle text-foreground/40" />
            Unlimited revisions and feedbacks
          </li>
          <li className="flex cursor-pointer gap-2 text-foreground/60 hover:text-foreground">
            <i className="fi fi-sc-check-circle text-foreground/40" />
            No hiring, no commitment
          </li>
          <li className="flex cursor-pointer gap-2 text-foreground/60 hover:text-foreground">
            <i className="fi fi-sc-check-circle text-foreground/40" />
            No vendor and partner lock in
          </li>
          <li className="flex cursor-pointer gap-2 text-foreground/60 hover:text-foreground">
            <i className="fi fi-sc-check-circle text-foreground/40" />
            Support white label partner
          </li>
        </ul>
      </div>
    </motion.section>
  );
}
