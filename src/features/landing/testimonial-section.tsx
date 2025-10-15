import * as motion from "motion/react-client"
import * as React from "react"

export function TestimonialSection(): React.ReactElement {
  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        damping: 8,
        stiffness: 60,
        ease: "easeInOut",
        duration: 1.2,
      }}
      viewport={{ once: true, margin: "0% 0% -30% 0%" }}
      className="flex flex-col items-center py-20"
      id="testimonials"
    >
      <span className="text-sm text-foreground/40 font-heading font-medium">
        Testimonials
      </span>

      <h2 className="text-4xl font-semibold font-heading text-center leading-tight mt-8">
        They love to work
        <br />
        with us
      </h2>

      <div className="flex flex-col items-center gap-5 mt-16 w-full tablet:w-9/12">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col items-center">
            <p className="text-lg text-center text-pretty leading-relaxed transition-all duration-300 hover:text-foreground/60 cursor-pointer">
              "Weebo did an absolutely stellar job on our new website.
              Everything was on point and better than our team expected. Very
              Recommended"
            </p>

            <span className="flex flex-wrap gap-1 items-center mt-5">
              {Array.from({ length: 5 }).map((_, index) => (
                <i className="fi fi-sr-star text-pink-500" key={index} />
              ))}
            </span>

            <span className="text-foreground/60 cursor-pointer mt-10">
              Olga Gomonova, CEO Aimiable
            </span>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-lg text-center text-pretty leading-relaxed transition-all duration-300 hover:text-foreground/60 cursor-pointer">
              "Working with Weebo has been an absolute pleasure. Very happy with
              the final result. Good jobs"
            </p>

            <span className="flex flex-wrap gap-1 items-center mt-5">
              {Array.from({ length: 5 }).map((_, index) => (
                <i className="fi fi-sr-star text-pink-500" key={index} />
              ))}
            </span>

            <span className="text-foreground/60 cursor-pointer mt-10">
              Catherine Zhang, Co-Founder Narrable
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
