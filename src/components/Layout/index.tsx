import { ReactChild, ReactChildren } from 'react'
import loadable from '@loadable/component'

const Header = loadable(() => import('../Header'))
const Footer = loadable(() => import('../Footer'))

interface Props {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[]
}

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container content-center mx-auto px-4 sm:px-6">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
