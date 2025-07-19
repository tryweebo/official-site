import * as React from "react"
import { Dialog, DialogContent, DialogTrigger } from "@shared/components"

export function CustomPlan(): React.ReactElement {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-col col-span-4 bg-surface rounded-2xl p-4 transition-all duration-300 hover:-translate-y-2 hover:scale-95 hover:rotate-6 cursor-pointer rotate-2">
          <div className="flex items-center">
            <h3 className="flex items-center gap-1 text-sm font-medium text-green-500 bg-green-100 rounded-full px-3 py-1 pl-2">
              <i className="fi fi-sc-check-circle" />
              Project based
            </h3>
          </div>

          <div className="text-xl font-medium mt-4 font-heading">Custom</div>

          <p className="text-foreground/60 leading-relaxed mt-5 text-balance">
            If you need something different or one time purchase or help for
            website that way more complex
          </p>
        </div>
      </DialogTrigger>
      <DialogContent>
        <h3 className="text-xl font-heading font-semibold leading-tight">
          Custom Project (One Time)
        </h3>

        <p className="text-foreground/60 leading-relaxed text-pretty mt-5">
          If you need something different or one time purchase or help for
          website that way more complex
        </p>

        <ul className="flex flex-col gap-2 ml-1 mt-6">
          <li className="flex items-center gap-2">
            <i className="fi fi-sc-check-circle" />
            Full services (design, development, optimization, integrations,
            deployments, publish)
          </li>
          <li className="flex items-center gap-2">
            <i className="fi fi-sc-check-circle" />
            Custom or 1-3 weeks turnaround
          </li>
          <li className="flex items-center gap-2">
            <i className="fi fi-sc-check-circle" />
            Unlimited revisions
          </li>
        </ul>

        <p className="text-foreground/60 leading-relaxed text-pretty mt-6">
          You can use this for one time purchase, that you may don't need
          something else. Or you have a big project plans.
        </p>

        <p className="text-foreground/60 leading-relaxed text-pretty mt-6">
          Best if you need something that custom or single service at the time.
          You can upgrade this into monthly subscriptions if you need more
          custom work in a month.
        </p>
      </DialogContent>
    </Dialog>
  )
}
