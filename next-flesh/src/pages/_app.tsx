import "../styles/index.scss"
import { ReactNode } from "react"
import type { AppContext, AppInitialProps, AppLayoutProps } from "next/app"
import { NextComponentType } from "next"
import { QueryClient, QueryClientProvider } from "react-query"
import { CurrentUserProvider } from "../providers/currentUser"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page)

  return getLayout(
    <QueryClientProvider client={queryClient}>
      <CurrentUserProvider>
        <Component {...pageProps} />
      </CurrentUserProvider>
    </QueryClientProvider>
  )
}

export default MyApp
