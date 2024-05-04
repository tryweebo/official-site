interface Props {
  children: React.ReactNode
}

export default function SectionLabel({
  children,
}: Props): Readonly<React.ReactElement> {
  return (
    <span className="flex items-center justify-center text-sm font-medium !leading-none gap-3 bg-background border border-border rounded-full px-9 py-5">
      {children}
    </span>
  )
}
