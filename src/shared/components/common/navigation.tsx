'use client'

import { animate, inView } from 'motion/react'
import Link from 'next/link'
import * as React from 'react'

type NavItemProps = {
  href: string
  target?: React.HTMLAttributeAnchorTarget
  children: React.ReactNode
}

function NavigationItem({
  href,
  children,
  target,
}: NavItemProps): React.ReactElement {
  return (
    <li className="flex text-sm font-medium transition-all duration-300">
      <Link href={href} target={target} className="flex items-center gap-2">
        {children}
      </Link>
    </li>
  )
}

export function Navigation(): React.ReactElement {
  const ref = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    inView('#footer', () => {
      if (ref.current) {
        animate(
          ref.current,
          { y: 300, x: '-50%' },
          { type: 'spring', duration: 1.2 },
        )
      }

      return () => {
        if (ref.current) {
          animate(
            ref.current,
            { y: 0, x: '-50%' },
            { type: 'spring', duration: 1.2 },
          )
        }
      }
    })
  }, [])

  return (
    <nav
      ref={ref}
      className="hidden tablet:flex items-center justify-between fixed bottom-3 mx-auto border border-border bg-surface left-1/2 -translate-x-1/2 p-1 rounded-2xl shadow-lg"
      suppressHydrationWarning
    >
      <div className="flex items-center gap-3 border border-border p-3 rounded-xl">
        <ul className="flex items-center gap-5">
          <NavigationItem href={'/'}>
            <i className="fi fi-rr-circle-small" />
            Home
          </NavigationItem>
          <NavigationItem href={'/services'}>Services</NavigationItem>
          <NavigationItem href={'/works'}>See works</NavigationItem>
          <NavigationItem href={'/plans'}>Plans</NavigationItem>
          <NavigationItem href={'/faqs'}>FAQs</NavigationItem>
          <NavigationItem href={'/contact'}>
            Getting Started
            <i className="fi fi-rr-arrow-right" />
          </NavigationItem>
        </ul>
      </div>
    </nav>
  )
}
