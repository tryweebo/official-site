import type * as React from "react";

export function Footer(): React.ReactElement<any> {
  return (
    <footer className="flex flex-col text-sm" id="footer">
      <div className="mt-8 flex tablet:flex-row flex-col tablet:items-center tablet:justify-between py-7">
        <span className="hover:-translate-x-1 inline-flex cursor-pointer gap-2 text-sm transition-all duration-300">
          Built with <i className="fi fi-sc-heart" />
        </span>
        <span className="hover:-translate-x-1 flex cursor-pointer items-center gap-2 transition-all duration-300">
          Design in Bali.
        </span>
      </div>
    </footer>
  );
}
