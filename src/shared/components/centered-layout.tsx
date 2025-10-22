import type React from "react";

type CenteredLayoutProps = {
  children: React.ReactNode;
};

export function CenteredLayout({
  children,
}: CenteredLayoutProps): React.ReactElement {
  return (
    <div className="container mx-auto laptop:px-0 px-5">
      <div className="mx-auto laptop:w-8/12 w-full laptop:px-20">
        {children}
      </div>
    </div>
  );
}
