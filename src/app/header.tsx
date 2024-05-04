import Link from 'next/link'
import * as React from 'react'
import { Button } from '~/components/ui/button'
import { Nav } from '~/types/nav'

function BrandLogo(): Readonly<React.ReactElement> {
  return (
    <Link
      href={'/'}
      className="flex justify-center items-center transition-all duration-700 hover:scale-95 hover:-translate-y-2"
    >
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
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
  )
}

function NavItem({ item }: { item: Nav }): React.ReactElement {
  return (
    <li className="flex items-center justify-center px-4 py-3 rounded-full bg-transparent cursor-pointer text-base font-medium transition-all duration-700 hover:bg-secondary hover:text-secondary-foreground leading-none">
      <Link href={item.path || '#'}>{item.label}</Link>
    </li>
  )
}

function Navs(): React.ReactElement {
  const list: Nav[] = [
    { label: 'Works', path: '/works' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Offer', path: '/offers' },
    { label: 'Resources', path: '/shop' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="flex items-center border border-border p-[6px] rounded-full bg-background">
      <ul className="flex items-center">
        {list.map((item, index) => (
          <NavItem item={item} key={index} />
        ))}
      </ul>
    </nav>
  )
}

export default function Header(): Readonly<React.ReactElement> {
  return (
    <header className="flex items-center px-16 py-3 fixed top-0 inset-x-0 justify-between z-50">
      <BrandLogo />
      <div className="flex items-center gap-16">
        <Navs />
        <Button
          asChild
          size={'sm'}
          className="transition-all duration-700 hover:scale-95"
        >
          <Link
            href={
              'https://cal.com/nyomansunima/discovery-call-with-nyoman-sunima-weebo'
            }
            target="_blank"
          >
            Get started
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.2498 12H4.25"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
              <path
                d="M14.5901 17.66C14.5901 14.7503 17.1527 12 20.2502 12"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
              <path
                d="M14.5901 6.33984C14.5901 9.24959 17.1527 11.9999 20.2502 11.9999"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
          </Link>
        </Button>
      </div>
    </header>
  )
}
