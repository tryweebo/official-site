import * as motion from "motion/react-client";
import type * as React from "react";
import { CustomPlan } from "./custom-plan";
import { DetailDialog } from "./detail-dialog";
import { SubscriptionPlan } from "./subscription-plan";
import { SupportPlan } from "./support-plan";

export function PlansSection(): React.ReactElement {
  return (
    <motion.section
      className="flex flex-col items-center py-20"
      id="plans"
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
        Plans.
      </span>

      <h2 className="group mt-8 laptop:w-9/12 text-center font-heading font-semibold text-4xl leading-tight">
        Clear & simple pricing
        <br />
        no hidden fees
      </h2>

      <div className="mt-5 flex justify-center">
        <DetailDialog />
      </div>

      <div className="mt-16 flex tablet:w-10/12 w-full items-center gap-5">
        <div className="grid grid-cols-4 gap-x-3 gap-y-6">
          <CustomPlan />
          <SupportPlan />
          <SubscriptionPlan />
        </div>
      </div>
    </motion.section>
  );
}
