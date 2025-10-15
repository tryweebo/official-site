import * as React from "react"
import { Button } from "./ui/button"

export function Header(): React.ReactElement<any> {
  return (
    <header className="flex items-center justify-between h-20 laptop:h-28">
      <a
        href={"/"}
        className="flex items-center transition-all duration-300 font-medium hover:-translate-y-1 font-heading"
      >
        Weebo.
      </a>

      <div className="flex items-center gap-3">
        <Button
          asChild
          variant={"secondary"}
          className="transition-all duration-300 hover:-translate-y-1"
        >
          <a
            href={"https://cal.com/nyomansunima/weebo-intro-call"}
            target="_blank"
            rel="noreferrer noopener"
          >
            Book a call <i className="fi fi-sc-check-circle" />
          </a>
        </Button>
      </div>
    </header>
  )
}
