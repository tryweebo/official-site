'use client'

import * as React from 'react'
import Link from 'next/link'
import { Button } from '~/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'
import { usePathname } from 'next/navigation'
import { useClickOutside, useKeyEvent, usePathChange } from '~/lib/hooks/event'

interface NavMenuItemProps {
  children: React.ReactNode
  href: string
  target?: React.HTMLAttributeAnchorTarget
}

export function Brand(): React.ReactElement {
  return (
    <div className="text-foreground/50 text-sm gap-3 flex relative z-10">
      <Link href={'/'} className="transition-all duration-300 hover:scale-95">
        <svg
          width="44"
          height="44"
          viewBox="0 0 52 52"
          fill="none"
          className="-ml-3"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.4727 26.1797C17.8334 24.4053 14.6462 24.6754 14.6444 27.0911C14.6371 37.1284 22.7679 45.2711 32.8052 45.2785C42.8424 45.2858 50.9852 37.1549 50.9925 27.1176C50.9943 24.699 47.8033 24.425 46.1594 26.1992C42.8369 29.7851 38.0859 32.0283 32.8118 32.0244C27.5377 32.0205 22.79 29.7705 19.4727 26.1797Z"
            fill="black"
          />
          <ellipse
            cx="6.77307"
            cy="0.816453"
            rx="6.77307"
            ry="0.816453"
            transform="matrix(0.999619 0.0275695 -0.0170244 0.999856 26.0566 13.0774)"
            fill="black"
          />
          <ellipse
            cx="13.4748"
            cy="1.27004"
            rx="13.4748"
            ry="1.27004"
            transform="matrix(0.999619 0.0275695 -0.0170244 0.999856 19.356 17.6145)"
            fill="black"
          />
        </svg>
      </Link>
    </div>
  )
}

export function NavMenuItem({
  children,
  href,
  target,
}: NavMenuItemProps): React.ReactElement {
  return (
    <li className="flex w-full col-span-1">
      <Link
        href={href}
        target={target}
        className="flex justify-center items-center text-sm transition-all duration-300 hover:-translate-x-1"
      >
        {children}
      </Link>
    </li>
  )
}

function Menu(): React.ReactElement {
  const modalRef = React.useRef<HTMLDivElement>(null)
  const [isShow, setShow] = React.useState<boolean>(false)
  const path = usePathname()

  useClickOutside(modalRef, () => {
    setShow(false)
  })

  usePathChange(() => {
    setShow(false)
  })

  useKeyEvent('keydown', 'Escape', () => {
    setShow(false)
  })

  return (
    <div className="relative">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={'outline'}
              size={'icon'}
              onClick={() => setShow(true)}
              className="hover:scale-95 rounded-2xl"
            >
              <i className="fi text-xs fi-rr-menu-burger" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            Explore all of the menus, support & contact
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {isShow && (
        <div
          className="flex px-6 py-5 rounded-xl border border-border bg-ambient w-[300px] absolute z-20 top-12 right-0"
          ref={modalRef}
        >
          <ul className="grid grid-cols-2 w-full gap-x-4 gap-y-4">
            <NavMenuItem href="/works">Works</NavMenuItem>
            <NavMenuItem href="/workflow">How it works</NavMenuItem>
            <NavMenuItem href="/offers">Offers</NavMenuItem>
            <NavMenuItem href="/contact">Contact</NavMenuItem>
            <NavMenuItem href="/plans">Pricing</NavMenuItem>
            <NavMenuItem href="/services">Services</NavMenuItem>
          </ul>
        </div>
      )}
    </div>
  )
}

export function Actions(): React.ReactElement {
  return (
    <div className="flex relative z-10 gap-2">
      <Menu />
    </div>
  )
}

export default function Header(): React.ReactElement {
  return (
    <header className="flex items-center justify-between h-20 laptop:h-44">
      <Brand />
      <Actions />
    </header>
  )
}
