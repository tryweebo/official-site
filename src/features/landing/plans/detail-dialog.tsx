import * as React from "react"
import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@shared/components"

export function DetailDialog(): React.ReactElement {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"text"}
          size={"lg"}
          className="transition-all duration-300 hover:-translate-y-1 text-foreground/60 hover:text-foreground"
        >
          See timelines
        </Button>
      </DialogTrigger>
      <DialogContent>
        <h3 className="text-xl font-heading font-semibold leading-tight">
          How long the project takes?
        </h3>

        <p className="text-foreground/60 leading-relaxed text-pretty mt-5">
          We tried the best to make sure the project isn't take too long to
          complete. While ensuring the high quality and hit target, we make it
          to streamline the process.
        </p>

        <p className="text-pretty leading-relaxed mt-6 font-medium">
          Timelines:
        </p>

        <ul className="flex flex-col gap-2 ml-1 mt-3">
          <li className="flex items-center gap-1">
            <i className="fi fi-sr-bullet text-foreground/60" />
            Landing page: 3 days - 1 week
          </li>
          <li className="flex items-center gap-1">
            <i className="fi fi-sr-bullet text-foreground/60" />
            Standard website: 1 - 2 weeks
          </li>
          <li className="flex items-center gap-1">
            <i className="fi fi-sr-bullet text-foreground/60" />
            Complex website: 2 - 4 weeks
          </li>
          <li className="flex items-center gap-1">
            <i className="fi fi-sr-bullet text-foreground/60" />
            Ecommerces: 2 - 4 weeks
          </li>
        </ul>

        <p className="text-pretty leading-relaxed mt-6 text-foreground/60">
          The project can take less or longer than expected, We always in time,
          so don't worry of bloated cost.
        </p>
      </DialogContent>
    </Dialog>
  )
}
