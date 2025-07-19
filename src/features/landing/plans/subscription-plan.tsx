import * as React from "react"
import { Dialog, DialogContent, DialogTrigger } from "@shared/components"

export function SubscriptionPlan(): React.ReactElement {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-col col-span-4 tablet:col-span-2 bg-surface rounded-2xl p-4 transition-all duration-300 hover:-translate-y-2 hover:scale-95 hover:rotate-6 cursor-pointer rotate-12">
          <div className="flex items-center">
            <h3 className="flex items-center gap-1 text-sm font-medium text-blue-500 bg-blue-100 rounded-full px-3 py-1 pl-2">
              <i className="fi fi-sc-check-circle" />
              Monthly flat rate
            </h3>
          </div>

          <div className="text-xl font-medium mt-4 font-heading">
            $5,250 / <span className="text-foreground/50">month</span>
          </div>

          <p className="text-foreground/60 leading-relaxed mt-5 text-pretty">
            For unlimited websites within a short period of time.
          </p>
        </div>
      </DialogTrigger>
      <DialogContent>
        <h3 className="text-xl font-heading font-semibold leading-tight">
          Monthly Subscription ($5,250/month)
        </h3>

        <p className="text-foreground/60 leading-relaxed text-pretty mt-5">
          Best if you need unlimited projects and ongoing supports for all of
          your website works all in one plan
        </p>

        <ul className="flex flex-col gap-2 ml-1 mt-6">
          <li className="flex items-center gap-2">
            <i className="fi fi-sc-check-circle" />
            Full services & supports (design, development, optimization,
            integrations, deployments, publish)
          </li>
          <li className="flex items-center gap-2">
            <i className="fi fi-sc-check-circle" />
            1-2 week turnaround
          </li>
          <li className="flex items-center gap-2">
            <i className="fi fi-sc-check-circle" />
            Unlimited revisions
          </li>
          <li className="flex items-center gap-2">
            <i className="fi fi-sc-check-circle" />
            One project at the time
          </li>
          <li className="flex items-center gap-2">
            <i className="fi fi-sc-check-circle" />
            Unlimited request
          </li>
          <li className="flex items-center gap-2">
            <i className="fi fi-sc-check-circle" />
            Pause or cancel anytime
          </li>
        </ul>
      </DialogContent>
    </Dialog>
  )
}
