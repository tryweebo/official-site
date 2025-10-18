import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@shared/components";
import type * as React from "react";

export function StackDialog(): React.ReactElement {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="hover:-translate-y-1 transition-all duration-300"
          size={"lg"}
          variant={"text"}
        >
          See details
        </Button>
      </DialogTrigger>
      <DialogContent>
        <h3 className="font-heading font-semibold text-xl leading-tight">
          What we work on?
        </h3>

        <p className="mt-5 text-pretty text-foreground/60 leading-relaxed">
          We team up with founders and startups to bring their ideas to
          life—whether it's a simple landing page, a complete website, or mobile
          and web apps.
        </p>

        <p className="mt-6 text-pretty font-medium leading-relaxed">Types:</p>

        <p className="mt-3 text-pretty text-foreground/60 leading-relaxed">
          We create and work for several types of sites including landing page,
          busienss sites, personal sites, products, sales funnel, news, content
          and ecommerce.
        </p>

        <p className="mt-3 text-pretty text-foreground/60 leading-relaxed">
          You also can request custom sites based on your needs. We help you out
          for success story.
        </p>

        <p className="mt-6 text-pretty font-medium leading-relaxed">
          Tools & stacks:
        </p>

        <p className="mt-3 text-pretty text-foreground/60 leading-relaxed">
          Currently we only support your needs for creating goods and excellent
          website with most used and trending tools.
        </p>

        <ul className="mt-3 ml-1 flex flex-col gap-2">
          <li className="flex items-center gap-1">
            <i className="fi fi-sr-bullet text-foreground/60" />
            Webflow
          </li>
          <li className="flex items-center gap-1">
            <i className="fi fi-sr-bullet text-foreground/60" />
            Framer
          </li>
          <li className="flex items-center gap-1">
            <i className="fi fi-sr-bullet text-foreground/60" />
            NextJs
          </li>
          <li className="flex items-center gap-1">
            <i className="fi fi-sr-bullet text-foreground/60" />
            Shopify (for ecommerce)
          </li>
        </ul>

        <p className="mt-6 text-pretty text-foreground/60 leading-relaxed">
          Don't worry, we nailed and multi talent teams to help you and business
          grow with what you need.
        </p>
      </DialogContent>
    </Dialog>
  );
}
