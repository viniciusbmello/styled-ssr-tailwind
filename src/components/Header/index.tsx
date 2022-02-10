import { TerminalIcon } from '@heroicons/react/outline'

const Header = () => {
  return (
    <header className="border-b border-gray-100 shadow-md shadow-gray-100 bg-white">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <p className="flex items-center space-x-1 text-blue-600">
          <TerminalIcon className="w-12 h-12 flex-shrink-0" />
          <span className="flex flex-col">
            <span className="font-bold text-lg tracking-tight whitespace-nowrap leading-tight">
              Vinícius Baptista de Mello
            </span>
            <span className="text-sm tracking-tight whitespace-nowrap">
              Personal Blog
            </span>
          </span>
        </p>
      </div>
    </header>
  )
}

export default Header
