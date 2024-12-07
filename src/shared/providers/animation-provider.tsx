'use client'

import * as React from 'react'
import { ReactLenis } from 'lenis/react'
import { cancelFrame, frame } from 'framer-motion'

interface AnimationProviderProps {
  children: React.ReactNode
}

export function AnimationProvider({
  children,
}: AnimationProviderProps): React.ReactElement {
  const lenisRef = React.useRef<any>(undefined)

  React.useEffect(() => {
    function update(time: any) {
      lenisRef.current?.lenis?.raf(time)
    }

    frame.update(update, true)

    return () => cancelFrame(update)
  }, [])

  return (
    <ReactLenis root options={{ lerp: 0.2, duration: 1.6 }}>
      {children}
    </ReactLenis>
  )
}
