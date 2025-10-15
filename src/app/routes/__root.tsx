import { CenteredLayout, Footer, Header } from "@shared/components"
import styles from "@shared/styles/globals.css?url"
import {
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router"

interface RootComponentProps {
  children: React.ReactNode
}

interface RootWithContextProps {
  // TODO: Define your context props here
  // you can add several integration into the context router
  // will be visible to the router file
  //
  // example:
  // queryClient: QueryClient
  // etc.
}

export const Route = createRootRouteWithContext<RootWithContextProps>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: styles,
      },
    ],
  }),
  shellComponent: RootComponent,
})

function RootComponent({ children }: RootComponentProps) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <CenteredLayout>
          <Header />
          <div className="min-h-screen py-20 tablet:pt-0 tablet:pb-36">
            {children}
          </div>
          <Footer />
        </CenteredLayout>
        <Scripts />
      </body>
    </html>
  )
}
