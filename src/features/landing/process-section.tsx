import * as motion from "motion/react-client";
import type * as React from "react";

type Process = {
  title: string;
  description: string;
};

const processSteps: Process[] = [
  {
    title: "01. Pick a plan",
    description:
      "We keep things simple. Whether you need a new website, or simple updates, we've got you covered.",
  },
  {
    title: "02. Reseach & plans",
    description:
      "We'll help you figure out your website goals and what problems you are looking to solve, and then craft a plan to achieve them.",
  },
  {
    title: "03. Design & development",
    description:
      "Next, we'll create designs to solve the problems we identified in the planning stage. We'll do a couple concepts so you have some options. Once you’re completely happy with the design we’ll build it.",
  },
  {
    title: "04. Revision & iteration",
    description:
      "Time to revisions and matching the expectations with the results. We’ll make sure everything is perfect before we launch.",
  },
  {
    title: "05. Launch & support",
    description:
      "Time to launch. We'll transfer full ownership of the site to you, and then train you in how to use the site so you can easily manage it yourself.",
  },
];

function ProcessItem({ step }: { step: Process }): React.ReactElement {
  const { title, description } = step;

  return (
    <div className="group hover:-translate-y-4 group flex w-full cursor-pointer flex-col rounded-2xl bg-surface p-1 transition-all duration-300">
      <div className="relative flex flex-col rounded-xl p-3">
        <div className="flex items-center gap-2">
          <i className="fi fi-sc-check-circle text-foreground/40" />
          <h3 className="font-medium text-lg">{title}</h3>
        </div>
        <p className="mt-4 pb-3 text-foreground/60 text-sm leading-relaxed">
          {description}
        </p>

        <i className="fi fi-sr-bullet absolute top-2 right-2 text-foreground/30" />
      </div>
    </div>
  );
}

export function ProcessSection(): React.ReactElement {
  return (
    <motion.section
      className="flex flex-col items-center py-20"
      id="how-it-works"
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
        How it works
      </span>

      <h2 className="group mt-8 laptop:w-9/12 text-center font-heading font-semibold text-4xl leading-tight">
        Uncomplicated process
        <br />
        for amazing results
      </h2>

      <div className="relative mt-20 flex laptop:w-8/12 tablet:w-10/12 flex-col items-center gap-5">
        {processSteps.map((step, index) => (
          <ProcessItem key={index} step={step} />
        ))}
      </div>
    </motion.section>
  );
}
