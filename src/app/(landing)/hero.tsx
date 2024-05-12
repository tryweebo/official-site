'use client'

import Link from 'next/link'
import { StrokeLineBackground } from '~/components/common/bg'
import { Button } from '~/components/ui/button'

export default function Hero(): Readonly<React.ReactElement> {
  return (
    <section className="relative">
      <div className="absolute">
        <StrokeLineBackground />
      </div>

      <div className="px-5 laptop:px-0 container mx-auto py-28 laptop:py-48 relative">
        <div className="flex flex-col">
          <h2 className="text-5xl laptop:text-7xl !leading-tight font-medium font-heading desktop:w-9/12">
            Unlimited web design partner for growing startups, agency &
            enterprise
          </h2>
          <p className="text-lg font-medium leading-relaxed desktop:w-5/12 mt-14">
            Your web design partner for startups, agency, and enterprise, help
            you create better experience, design, modern website for business.
            Create website with all in one partner to scale and grow your
            business.
          </p>

          <div className="flex flex-col tablet:flex-row mt-14 gap-5 laptop:gap-16">
            <Button
              asChild
              variant={'text-primary'}
              className="transition-all duration-700 hover:-translate-x-2"
            >
              <Link href={'/offer'}>
                See New Offers
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.2498 12H4.25"
                    className="stroke-primary"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                  <path
                    d="M14.5901 17.66C14.5901 14.7503 17.1527 12 20.2502 12"
                    className="stroke-primary"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                  <path
                    d="M14.5901 6.33984C14.5901 9.24959 17.1527 11.9999 20.2502 11.9999"
                    className="stroke-primary"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
              </Link>
            </Button>
            <Button
              asChild
              size={'sm'}
              className="transition-all duration-700 hover:translate-x-2"
            >
              <Link
                href={
                  'https://cal.com/nyomansunima/discovery-call-with-nyoman-sunima-weebo'
                }
                target="_blank"
              >
                Get Started Now
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
        </div>
      </div>
    </section>
  )
}
