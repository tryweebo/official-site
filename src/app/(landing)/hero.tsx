'use client'

import Link from 'next/link'
import { Button } from '~/components/ui/button'
import { motion } from 'framer-motion'

export default function Hero(): Readonly<React.ReactElement> {
  return (
    <section className="relative">
      <div className="absolute">
        <svg
          width="757"
          height="757"
          viewBox="0 0 757 757"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1V756M42.9231 1V756M84.8462 1V756M126.769 1V756M168.692 1V756M210.615 1V756M252.538 1V756M294.462 1V756M336.385 1V756M378.308 1V756M420.231 1V756M462.154 1V756M504.077 1V756M546 1V756M587.923 1V756M629.846 1V756M671.769 1V756M713.692 1V756M755.615 1V756M1.38462 756H756M1.38462 714.055H756M1.38462 672.111H756M1.38462 630.167H756M1.38462 588.222H756M1.38462 546.278H756M1.38462 504.333H756M1.38462 462.389H756M1.38462 420.444H756M1.38462 378.5H756M1.38462 336.556H756M1.38462 294.611H756M1.38462 252.667H756M1.38462 210.722H756M1.38462 168.778H756M1.38462 126.833H756M1.38462 84.8889H756M1.38462 42.9444H756M1.38462 1L756 1"
            stroke="url(#paint0_radial_18_15)"
            stroke-opacity="0.23"
            stroke-width="0.908544"
          />
          <defs>
            <radialGradient
              id="paint0_radial_18_15"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(378.048 340.072) rotate(89.9377) scale(415.928)"
            >
              <stop stop-opacity="0.39" />
              <stop offset="1" stop-color="#666666" stop-opacity="0.1" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="container mx-auto py-48 relative">
        <div className="flex flex-col">
          <motion.h2
            initial={{
              opacity: 0,
              y: 150,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: 'easeOut',
            }}
            className="text-7xl !leading-tight font-medium font-heading desktop:w-9/12"
          >
            Unlimited web design partner for growing startups, agency &
            enterprise
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              y: 150,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.7,
              ease: 'easeOut',
            }}
            className="text-lg font-medium leading-relaxed desktop:w-5/12 mt-24"
          >
            Your web design partner for startups, agency, and enterprise, help
            you create better experience, design, modern website for business.
            Create website with all in one partner to scale and grow your
            business.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 150,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.7,
              ease: 'easeOut',
            }}
            className="flex mt-14 gap-16"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
