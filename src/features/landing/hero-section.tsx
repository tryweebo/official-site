import { Button } from "@shared/components";

export function HeroSection() {
  return (
    <section
      className="flex flex-col items-center tablet:pt-20 pb-20"
      id="hero"
    >
      <span className="flex cursor-pointer items-center text-center font-medium text-foreground/40 text-sm">
        Available spot. Limited
      </span>

      <h2 className="group mt-8 laptop:w-9/12 tablet:w-8/12 text-center font-heading font-semibold text-4xl leading-tight">
        Web design & dev
        <br />
        partner on the go
      </h2>

      <p className="mx-auto mt-10 tablet:w-7/12 w-full text-pretty text-center text-foreground/60 leading-7">
        Helping startups, founders, agencies, and enterprises build their on
        demand website with no lacks
      </p>

      <span className="mt-6 flex flex-wrap items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <i className="fi fi-sr-star text-orange-500" key={index} />
        ))}
      </span>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
        <span className="hover:-translate-y-1 flex cursor-pointer items-center gap-2 text-foreground/60 text-sm transition-all duration-300">
          <i className="fi fi-sc-check-circle text-green-600" />
          Quick delivery
        </span>
        <span className="hover:-translate-y-1 flex cursor-pointer items-center gap-2 text-foreground/60 text-sm transition-all duration-300">
          <i className="fi fi-sc-check-circle text-green-600" />
          Cancel anytime
        </span>
        <span className="hover:-translate-y-1 flex cursor-pointer items-center gap-2 text-foreground/60 text-sm transition-all duration-300">
          <i className="fi fi-sc-check-circle text-green-600" />
          Transparent pricing
        </span>
      </div>

      <div className="mt-16 flex tablet:flex-row flex-col items-center gap-5">
        <Button
          asChild
          className="hover:-translate-y-1 transition-all duration-300"
          size={"lg"}
        >
          <a
            href={"https://cal.com/nyomansunima/weebo-intro-call"}
            rel="noreferrer noopener"
            target="_blank"
          >
            Get Started
            <i className="fi fi-sr-location-arrow" />
          </a>
        </Button>
        <Button
          asChild
          className="hover:-translate-y-1 transition-all duration-300"
          size={"lg"}
          variant={"secondary"}
        >
          <a href={"/#plans"}>
            See Plans
            <i className="fi fi-sc-heart" />
          </a>
        </Button>
      </div>
    </section>
  );
}
