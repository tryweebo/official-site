import type * as React from "react";
import { Button } from "./ui/button";

export function Header(): React.ReactElement<any> {
  return (
    <header className="flex h-20 laptop:h-28 items-center justify-between">
      <a
        className="hover:-translate-y-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary font-medium transition-all duration-300"
        href={"/"}
      >
        <i className="fi fi-sc-bookmark" />
      </a>

      <div className="flex items-center gap-3">
        <Button
          asChild
          className="hover:-translate-y-1 transition-all duration-300"
          variant={"secondary"}
        >
          <a
            href={"https://cal.com/nyomansunima/weebo-intro-call"}
            rel="noreferrer noopener"
            target="_blank"
          >
            Book a call <i className="fi fi-sc-check-circle" />
          </a>
        </Button>
      </div>
    </header>
  );
}
