import { Link } from "react-router"
import * as React from "react"

export function Banner(): React.ReactElement {
  return (
    <Link
      to={"https://www.roastto.site"}
      target="_blank"
      className="flex justify-between p-1 rounded-xl bg-blue-600 text-blue-100 mt-4 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center gap-3 justify-between rounded-lg border-2 border-dashed border-blue-400/80 w-full px-3 py-2">
        <span className="font-heading font-semibold flex items-center gap-2">
          <i className="fi fi-br-flame" />
          Roast your website
        </span>
        <span className="font-heading text-white">Only $99</span>
      </div>
    </Link>
  )
}
