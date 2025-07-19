export function CenteredLayout({ children }): React.ReactElement<any> {
  return (
    <div className="px-5 laptop:px-0 container mx-auto">
      <div className="mx-auto w-full laptop:w-8/12 laptop:px-20">
        {children}
      </div>
    </div>
  )
}
