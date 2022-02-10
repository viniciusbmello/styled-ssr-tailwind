import loadable from '@loadable/component'

const Logo = loadable(() => import('../Logo'))

const Header = () => {
  return (
    <header className="border-b border-gray-100 shadow-md shadow-gray-100 bg-white">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <Logo />
      </div>
    </header>
  )
}

export default Header
