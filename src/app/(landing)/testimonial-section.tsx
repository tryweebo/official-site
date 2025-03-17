import * as React from 'react'

export function TestimonialSection(): React.ReactElement {
  return (
    <section className="flex flex-col items-center py-20">
      <span className="text-sm text-foreground/40 font-mono">
        Testimonials.
      </span>

      <h2 className="text-3xl font-semibold text-center leading-tight group laptop:w-9/12 mt-8">
        Spreading trust & love
        <br />
        <span className="text-foreground/30">with high quality</span>
      </h2>

      <div className="flex items-center gap-5 mt-16 w-full"></div>
    </section>
  )
}
