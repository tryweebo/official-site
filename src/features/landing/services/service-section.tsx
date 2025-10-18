import * as motion from "motion/react-client";
import type * as React from "react";
import { StackDialog } from "./stack-dialog";

const services = [
  "Design & development",
  "Branding & copywriting",
  "Integrations & automation",
  "Migrations & backups",
  "Optimization & audits",
  "Webflow Development",
  "Framer Development",
  "Shopify Development",
  "Custom Development",
];

function ServiceItem({ service }: { service: string }): React.ReactElement {
  return (
    <div className="hover:-translate-y-1 flex cursor-pointer items-center gap-2 text-foreground/60 transition-all duration-300 hover:text-foreground">
      <i className="fi fi-sc-bullet text-foreground/40" />
      {service}
    </div>
  );
}

export function ServiceSection(): React.ReactElement {
  return (
    <motion.section
      className="flex flex-col items-center py-20"
      id="services"
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
        Services
      </span>

      <h2 className="group mt-8 laptop:w-9/12 text-center font-heading font-semibold text-4xl leading-tight">
        All of the website work
        <br />
        done for you
      </h2>

      <div className="mt-5 flex justify-center">
        <StackDialog />
      </div>

      <div className="mt-16 flex flex-col justify-center gap-4">
        {services.map((service, index) => (
          <ServiceItem key={index} service={service} />
        ))}
      </div>
    </motion.section>
  );
}
