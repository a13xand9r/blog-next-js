import { AppProps } from 'next/dist/next-server/lib/router/router'
import { Layout } from '../components/layout'
import NextNprogress from 'nextjs-progressbar'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout>
    <NextNprogress
      color="#fdae25"
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
    />
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
