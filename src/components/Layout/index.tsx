import Header from '../Header'
import Footer from '../Footer'
import { ReactChild, ReactChildren } from 'react'

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
