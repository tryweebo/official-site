import * as React from 'react'

export type ToolData = {
  title: string
}

type ToolItemProps = {
  data: ToolData
}

export function ToolItem({ data }: ToolItemProps): React.ReactElement<any> {
  const { title } = data

  return (
    <div className="flex gap-2 items-center p-3 pr-5 text-sm font-medium transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <i className="fi fi-rr-circle-small" />
      {title}
    </div>
  )
}
