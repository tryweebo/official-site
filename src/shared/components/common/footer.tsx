import * as React from 'react'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'
import { mergeClass } from '@shared/utils'

const footerMenus = [
  { label: 'Privacy policy', href: '/privacy' },
  { label: 'Terms of use', href: '/terms' },
  { label: 'Faqs', href: '/faqs' },
]

interface MenuItemProps {
  href: string
  children?: React.ReactNode
  className?: string
}

function MenuItem({
  href,
  children,
  className,
}: MenuItemProps): React.ReactElement<any> {
  return (
    <li
      className={`${mergeClass(
        'flex items-center justify-center text-sm px-3 py-2 rounded-xl bg-transparent transition-all hover:-translate-x-1 hover:text-foreground/60 duration-200',
        className,
      )}`}
    >
      <Link href={href} className="w-full h-full">
        {children}
      </Link>
    </li>
  )
}

function FooterMenuList(): React.ReactElement<any> {
  return (
    <div className="flex">
      <ul className="flex items-center gap-2">
        {footerMenus.map((item, index) => (
          <MenuItem key={index} href={item.href}>
            {item.label}
          </MenuItem>
        ))}
      </ul>
    </div>
  )
}

export function Footer(): React.ReactElement<any> {
  return (
    <footer className="flex flex-col">
      <div className="flex flex-col text-foreground/60 gap-1">
        <p>Design in Bali, Indonesia for global audiences</p>
        <p>
          Build your own website now{' '}
          <Link
            href={'/contact'}
            className="transition-all duration-300 hover:font-medium hover:text-foreground"
          >
            @tryweebo
          </Link>
        </p>
        <p>
          Connect with the author{' '}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={'https://nyomansunima.one'}
                  target="_blank"
                  className="transition-all duration-300 hover:font-medium hover:text-foreground"
                >
                  @nyomansunima
                </Link>
              </TooltipTrigger>
              <TooltipContent>Collaborate with the author</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </p>
      </div>

      <div className="flex flex-col tablet:flex-row laptop:items-center py-7 laptop:justify-between mt-8">
        <span className="text-sm">
          Copyright &copy; 2024 - Alright Reserved
        </span>
        <FooterMenuList />
      </div>
    </footer>
  )
}
