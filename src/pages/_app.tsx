import '../styles/global.css'
import type { AppProps } from 'next/app'
import loadable from '@loadable/component'

const Layout = loadable(() => import('../components/Layout'))

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
