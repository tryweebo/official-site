import { PageTransition } from '@shared/components'
import * as React from 'react'

interface RootTemplateProps {
  children: React.ReactNode
}

export default function RootTemplate({
  children,
}: RootTemplateProps): React.ReactElement<any> {
  return <PageTransition>{children}</PageTransition>
}
