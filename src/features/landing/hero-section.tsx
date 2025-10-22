import { Button } from "@shared/components";
import { mergeClass } from "@shared/libs";
import type * as React from "react";

type WorkData = {
  image: string;
  label: string;
};

type WorkItemProps = {
  item: WorkData;
  className?: string;
};

function WorkItem({ item, className }: WorkItemProps) {
  return (
    <img
      alt={item.label}
      className={mergeClass(
        "hover:-translate-y-5 absolute inset-0 h-full w-full cursor-pointer overflow-hidden rounded-3xl border-2 border-border border-dashed object-cover transition-all duration-300 hover:scale-105",
        className
      )}
      src={item.image}
    />
  );
}

function WorkStack(): React.ReactElement {
  return (
    <div className="relative mt-20 h-[360px] w-10/12">
      <WorkItem
        className="-rotate-3"
        item={{
          image:
            "https://cdn.hashnode.com/res/hashnode/image/upload/v1761128452657/3d41ccfd-3c81-43e4-9484-7c04a7abec57.png",
          label: "Automatic nation",
        }}
      />
      <WorkItem
        className="translate-y-4 rotate-3"
        item={{
          image:
            "https://cdn.hashnode.com/res/hashnode/image/upload/v1761128323170/49739931-b892-4ac1-9b0c-654ae56ea1be.png",
          label: "Guna transport",
        }}
      />
    </div>
  );
}

export function HeroSection(): React.ReactElement {
  return (
    <section
      className="flex flex-col items-center py-28 tablet:pt-48"
      id="hero"
    >
      <span className="flex gap-2 text-foreground/40 text-sm">
        <i className="fi fi-sr-heart text-pink-500" /> Favored by more than 10+
        startups
      </span>

      <h2 className="mt-8 text-center font-medium text-5xl leading-tight tracking-tight">
        Trusted web design
        <br />
        partner on the go
      </h2>

      <p className="mx-auto mt-12 tablet:w-7/12 w-full text-pretty text-center text-foreground/60 leading-7">
        Helping startups, agencies, and enterprises build their on demand
        websites to win customers
      </p>

      <div className="mt-16 flex tablet:flex-row flex-col items-center gap-5">
        <Button
          asChild
          className="hover:-translate-y-1 transition-all duration-300"
          size={"lg"}
          variant={"primary"}
        >
          <a
            href={"https://cal.com/nyomansunima/weebo-intro-call"}
            rel="noreferrer noopener"
            target="_blank"
          >
            Book a call
            <i className="fi fi-sr-location-arrow" />
          </a>
        </Button>
      </div>

      <WorkStack />
    </section>
  );
}
