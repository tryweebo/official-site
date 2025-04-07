import * as React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@shared/components'

export function SupportPlan(): React.ReactElement {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-col col-span-4 tablet:col-span-2 border-2 border-border border-dashed bg-surface rounded-2xl p-4 transition-all duration-300 hover:-translate-y-2 hover:scale-95 hover:-rotate-6 cursor-pointer -rotate-3">
          <div className="flex items-center">
            <h3 className="flex items-center gap-1 text-sm font-medium text-purple-500 bg-purple-100 rounded-full px-3 py-1 pl-2">
              <i className="fi fi-sr-bullet" />
              Support
            </h3>
          </div>

          <div className="text-xl font-medium mt-4 font-heading">
            $575 / <span className="text-foreground/50">month</span>
          </div>

          <p className="text-foreground/60 leading-relaxed mt-5 text-pretty">
            Best for ongoing maintenance and website help
          </p>
        </div>
      </DialogTrigger>
      <DialogContent>
        <h3 className="text-xl font-heading font-semibold leading-tight">
          Support ($575/month)
        </h3>

        <p className="text-foreground/60 leading-relaxed text-pretty mt-5">
          if you need full month support to manage, and standby helping your
          website alive with thousand of traffics.
        </p>

        <ul className="flex flex-col gap-2 ml-1 mt-6">
          <li className="flex items-center gap-1">
            <i className="fi fi-sr-bullet text-foreground/60" />
            Simple support (Optimization, audits, integrations, content update,
            deployments, backups)
          </li>
          <li className="flex items-center gap-1">
            <i className="fi fi-sr-bullet text-foreground/60" />
            2-3 days turnaround
          </li>
          <li className="flex items-center gap-1">
            <i className="fi fi-sr-bullet text-foreground/60" />
            One project at the time
          </li>
          <li className="flex items-center gap-1">
            <i className="fi fi-sr-bullet text-foreground/60" />
            Pause or cancel anytime
          </li>
        </ul>
      </DialogContent>
    </Dialog>
  )
}
