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
    <div className="flex items-center gap-2 text-foreground/60">
      <i className="fi fi-sc-bullet" />
      {service}
    </div>
  );
}

export function ServiceSection(): React.ReactElement {
  return (
    <section className="flex flex-col items-center py-28" id="services">
      <span className="text-foreground/40 text-sm">Services</span>

      <h2 className="mt-8 text-center font-medium text-5xl leading-tight tracking-tight">
        The website just
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
    </section>
  );
}
