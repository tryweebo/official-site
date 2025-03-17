import * as React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'

export function Header(): React.ReactElement<any> {
  return (
    <header className="flex items-center justify-between h-20 laptop:h-44">
      <Link
        href={'/'}
        className="flex items-center transition-all duration-300 font-medium hover:-translate-y-1"
      >
        Weebo.
      </Link>

      <div className="flex items-center gap-3">
        <Button
          asChild
          variant={'outline'}
          className="transition-all duration-300 hover:-translate-y-1"
        >
          <Link
            href={'https://cal.com/nyomansunima/weebo-intro-call'}
            target="_blank"
          >
            Book a call <i className="fi fi-br-video-camera-alt" />
          </Link>
        </Button>
      </div>
    </header>
  )
}
