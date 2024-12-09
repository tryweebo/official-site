import * as React from 'react'

export type ServiceData = {
  title: string
}

type ServiceItemProps = {
  data: ServiceData
}

export function ServiceItem({
  data,
}: ServiceItemProps): React.ReactElement<any> {
  const { title } = data

  return (
    <div className="flex gap-2 items-center bg-surface p-3 pr-5 rounded-2xl border border-border text-sm font-medium transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <i className="fi fi-rr-circle-small" />
      {title}
    </div>
  )
}
