export function CenteredLayout({ children }): React.ReactElement<any> {
  return (
    <div className="px-5 laptop:px-0 container mx-auto">
      <div className="mx-auto w-full tablet:w-11/12 laptop:w-9/12 desktop:w-7/12 laptop:px-16">
        {children}
      </div>
    </div>
  )
}
