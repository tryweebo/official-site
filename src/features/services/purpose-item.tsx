import * as React from 'react'

export type PurposeData = {
  title: string
  description: string
}

type PurposeItemProps = {
  data: PurposeData
}

export function PurposeItem({
  data,
}: PurposeItemProps): React.ReactElement<any> {
  const { title, description } = data

  return (
    <div className="flex flex-col col-span-1 bg-surface border border-border rounded-2xl p-1 cursor-pointer transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-col border border-border rounded-xl p-4 h-full w-full">
        <div className="flex items-center gap-2">
          <i className="fi fi-rr-circle-small" />
          <h3 className="text-base font-medium !leading-tight">{title}</h3>
        </div>

        <p className="mt-3 !leading-relaxed text-foreground/60 text-sm">
          {description}
        </p>
      </div>
    </div>
  )
}
