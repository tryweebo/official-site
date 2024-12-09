import * as React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'

function Brand(): React.ReactElement {
  return (
    <Link
      href={'/'}
      className="flex items-center transition-all duration-300 font-medium hover:-translate-y-1"
    >
      tryweebo.one
    </Link>
  )
}

function Actions(): React.ReactElement {
  return (
    <div className="flex items-center gap-3">
      <Button
        asChild
        variant={'outline'}
        className="transition-all duration-300 hover:-translate-y-1"
      >
        <Link href={'/contact'}>Get Started</Link>
      </Button>
    </div>
  )
}

export function Header(): React.ReactElement<any> {
  return (
    <header className="flex items-center justify-between h-20 laptop:h-44">
      <Brand />
      <Actions />
    </header>
  )
}
