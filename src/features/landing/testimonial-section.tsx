import * as motion from "motion/react-client";
import type * as React from "react";

export function TestimonialSection(): React.ReactElement {
  return (
    <motion.section
      className="flex flex-col items-center py-20"
      id="testimonials"
      initial={{ opacity: 0, y: 200 }}
      transition={{
        type: "spring",
        damping: 8,
        stiffness: 60,
        ease: "easeInOut",
        duration: 1.2,
      }}
      viewport={{ once: true, margin: "0% 0% -30% 0%" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <span className="font-heading font-medium text-foreground/40 text-sm">
        Testimonials
      </span>

      <h2 className="mt-8 text-center font-heading font-semibold text-4xl leading-tight">
        They love to work
        <br />
        with us
      </h2>

      <div className="mt-16 flex tablet:w-9/12 w-full flex-col items-center gap-5">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col items-center">
            <p className="cursor-pointer text-pretty text-center text-lg leading-relaxed transition-all duration-300 hover:text-foreground/60">
              "Weebo did an absolutely stellar job on our new website.
              Everything was on point and better than our team expected. Very
              Recommended"
            </p>

            <span className="mt-5 flex flex-wrap items-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <i className="fi fi-sr-star text-foreground/40" key={index} />
              ))}
            </span>

            <span className="mt-10 cursor-pointer text-foreground/60">
              Olga Gomonova, CEO Aimiable
            </span>
          </div>
          <div className="flex flex-col items-center">
            <p className="cursor-pointer text-pretty text-center text-lg leading-relaxed transition-all duration-300 hover:text-foreground/60">
              "Working with Weebo has been an absolute pleasure. Very happy with
              the final result. Good jobs"
            </p>

            <span className="mt-5 flex flex-wrap items-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <i className="fi fi-sr-star text-foreground/40" key={index} />
              ))}
            </span>

            <span className="mt-10 cursor-pointer text-foreground/60">
              Catherine Zhang, Co-Founder Narrable
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
