import * as React from "react"
import { Link } from "react-router"
import { Button } from "./ui/button"

export function Header(): React.ReactElement<any> {
  return (
    <header className="flex items-center justify-between h-20 laptop:h-28">
      <Link
        to={"/"}
        className="flex items-center transition-all duration-300 font-medium hover:-translate-y-1 font-heading"
      >
        Weebo.
      </Link>

      <div className="flex items-center gap-3">
        <Button
          asChild
          variant={"secondary"}
          className="transition-all duration-300 hover:-translate-y-1"
        >
          <Link
            to={"https://cal.com/nyomansunima/weebo-intro-call"}
            target="_blank"
          >
            Book a call <i className="fi fi-sc-check-circle" />
          </Link>
        </Button>
      </div>
    </header>
  )
}
