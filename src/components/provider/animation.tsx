'use client'

import Lenis from 'lenis'
import * as React from 'react'

interface AnimationProviderProps {
  children: React.ReactNode
}

export default function AnimationProvider({
  children,
}: AnimationProviderProps): Readonly<React.ReactElement> {
  // register animation for the site
  // including the lenis (smooth scroll) and framer motion
  function registerAnimation() {
    const lenis = new Lenis({ duration: 2.5 })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }

  React.useEffect(() => {
    registerAnimation()
  }, [])

  return <>{children}</>
}
