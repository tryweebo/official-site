import * as React from "react"
import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@shared/components"

export function StackDialog(): React.ReactElement {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"text"}
          size={"lg"}
          className="transition-all duration-300 hover:-translate-y-1 text-foreground/60 hover:text-foreground"
        >
          See details
        </Button>
      </DialogTrigger>
      <DialogContent>
        <h3 className="text-xl font-heading font-semibold leading-tight">
          What we work on?
        </h3>

        <p className="text-foreground/60 leading-relaxed text-pretty mt-5">
          We team up with founders and startups to bring their ideas to
          life—whether it's a simple landing page, a complete website, or mobile
          and web apps.
        </p>

        <p className="text-pretty leading-relaxed mt-6 font-medium">Types:</p>

        <p className="text-pretty leading-relaxed mt-3 text-foreground/60">
          We create and work for several types of sites including landing page,
          busienss sites, personal sites, products, sales funnel, news, content
          and ecommerce.
        </p>

        <p className="text-pretty leading-relaxed mt-3 text-foreground/60">
          You also can request custom sites based on your needs. We help you out
          for success story.
        </p>

        <p className="text-pretty leading-relaxed mt-6 font-medium">
          Tools & stacks:
        </p>

        <p className="text-pretty leading-relaxed mt-3 text-foreground/60">
          Currently we only support your needs for creating goods and excellent
          website with most used and trending tools.
        </p>

        <ul className="flex flex-col gap-2 ml-1 mt-3">
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

        <p className="text-pretty leading-relaxed mt-6 text-foreground/60">
          Don't worry, we nailed and multi talent teams to help you and business
          grow with what you need.
        </p>
      </DialogContent>
    </Dialog>
  )
}
