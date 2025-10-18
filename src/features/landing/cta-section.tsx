import { Button } from "@shared/components";
import * as motion from "motion/react-client";
import type * as React from "react";

export function CTASection(): React.ReactElement {
  return (
    <motion.section
      className="flex flex-col items-center py-20"
      id="cta"
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
        Get Started.
      </span>

      <h2 className="group mt-8 laptop:w-9/12 text-center font-heading font-semibold text-4xl leading-tight">
        Let's move on
        <br />
        get spot
      </h2>

      <p className="mx-auto mt-10 tablet:w-7/12 w-full text-pretty text-center text-foreground/60 leading-7">
        We offer limited partner to work on. Secure your seat now and let us do
        your work.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
        <span className="hover:-translate-y-1 flex cursor-pointer items-center gap-2 text-foreground/60 text-sm transition-all duration-300">
          <i className="fi fi-sc-check-circle text-green-600" />
          No shit
        </span>
        <span className="hover:-translate-y-1 flex cursor-pointer items-center gap-2 text-foreground/60 text-sm transition-all duration-300">
          <i className="fi fi-sc-check-circle text-green-600" />
          Quick meeting
        </span>
        <span className="hover:-translate-y-1 flex cursor-pointer items-center gap-2 text-foreground/60 text-sm transition-all duration-300">
          <i className="fi fi-sc-check-circle text-green-600" />
          Perfect spot
        </span>
      </div>

      <div className="mt-16 flex items-center gap-5">
        <Button
          asChild
          className="hover:-translate-y-1 transition-all duration-300"
          size={"lg"}
        >
          <a
            href={"https://cal.com/nyomansunima/weebo-intro-call"}
            rel="noreferrer noopener"
            target="_blank"
          >
            Get the spot now
            <i className="fi fi-sr-location-arrow" />
          </a>
        </Button>
      </div>
    </motion.section>
  );
}
