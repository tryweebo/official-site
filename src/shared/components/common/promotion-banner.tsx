import Link from 'next/link'
import * as React from 'react'

export function PromotionBanner(): React.ReactElement {
  return (
    <Link
      href={'/offer/free-audit'}
      className="flex items-center p-3 border border-border bg-surface rounded-xl gap-2 text-sm mt-6 transition-all duration-300 hover:-translate-y-1 tablet:-mb-7 group"
      id="promotion-banner"
    >
      <i className="fi fi-rr-globe" />
      <span className="flex flex-1">Promotion: Free Website Audit</span>
      <span className="h-2 w-2 rounded-full bg-blue-600 animate-bounce" />
    </Link>
  )
}
