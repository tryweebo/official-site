import * as React from 'react'

export type TypeData = {
  title: string
}

type TypeItemProps = {
  data: TypeData
}

export function TypeItem({ data }: TypeItemProps): React.ReactElement<any> {
  const { title } = data

  return (
    <div className="flex gap-2 items-center p-3 pr-5 text-sm font-medium transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      {title}
    </div>
  )
}
