'use client'

import * as React from 'react'
import { motion } from 'motion/react'

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({
  children,
}: PageTransitionProps): React.ReactElement<any> {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        damping: 8,
        stiffness: 60,
        ease: 'easeInOut',
        duration: '.7',
      }}
    >
      {children}
    </motion.div>
  )
}
