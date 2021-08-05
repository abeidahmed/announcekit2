import "../styles/index.scss"
import type { AppProps } from "next/app"
import { QueryClient, QueryClientProvider } from "react-query"
import { CurrentUserProvider } from "../providers/currentUser"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <CurrentUserProvider>
        <Component {...pageProps} />
      </CurrentUserProvider>
    </QueryClientProvider>
  )
}

export default MyApp
