import * as React from "react"

export function Footer(): React.ReactElement<any> {
  return (
    <footer className="flex flex-col text-sm" id="footer">
      <div className="flex flex-col tablet:flex-row tablet:items-center py-7 tablet:justify-between mt-8">
        <span className="text-sm transition-all duration-300 hover:-translate-x-1 cursor-pointer inline-flex gap-2">
          Built with <i className="fi fi-sc-heart" />
        </span>
        <span className="flex items-center gap-2 transition-all duration-300 cursor-pointer hover:-translate-x-1">
          Design in Bali.
        </span>
      </div>
    </footer>
  )
}
