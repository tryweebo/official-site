import * as React from "react"
import * as motion from "motion/react-client"
import { CustomPlan } from "./custom-plan"
import { SupportPlan } from "./support-plan"
import { SubscriptionPlan } from "./subscription-plan"
import { DetailDialog } from "./detail-dialog"

export function PlansSection(): React.ReactElement {
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
      id="plans"
    >
      <span className="text-sm text-foreground/40 font-heading font-medium">
        Plans.
      </span>

      <h2 className="text-4xl font-semibold font-heading text-center leading-tight group laptop:w-9/12 mt-8">
        Clear & simple pricing
        <br />
        no hidden fees
      </h2>

      <div className="flex justify-center mt-5">
        <DetailDialog />
      </div>

      <div className="flex items-center gap-5 mt-16 w-full tablet:w-10/12">
        <div className="grid grid-cols-4 gap-x-3 gap-y-6">
          <CustomPlan />
          <SupportPlan />
          <SubscriptionPlan />
        </div>
      </div>
    </motion.section>
  )
}
