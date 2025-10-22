import type * as React from "react";

const items: string[] = [
  "10x team scale up",
  "Best white label partner",
  "No cost surprises",
  "Fast turnarounds",
  "Professional quality",
  "Years experiences",
  "No risk",
  "Satisfaction guaranteed",
];

type ItemProps = {
  label: string;
};

function Item({ label }: ItemProps): React.ReactElement {
  return (
    <li className="flex items-center gap-3 text-foreground/60">
      <i className="fi fi-sc-check-circle" />
      {label}
    </li>
  );
}

export function BenefitSection(): React.ReactElement {
  return (
    <section className="flex flex-col items-center py-28" id="mission">
      <span className="text-foreground/40 text-sm">Mission</span>

      <h2 className="mt-8 text-center font-medium text-5xl leading-tight tracking-tight">
        Big deals
        <br />
        no bloated fees
      </h2>

      <div className="mt-16 flex tablet:w-10/12 w-full items-center justify-center gap-5">
        <ul className="flex flex-col gap-4">
          {items.map((item, i) => (
            <Item key={`${item}-${i}`} label={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
