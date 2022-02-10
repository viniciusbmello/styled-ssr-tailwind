import Link from 'next/link'
import { TerminalIcon } from '@heroicons/react/outline'

const Logo = () => {
  return (
    <Link href="/">
      <a className="flex items-center space-x-1 text-blue-600">
        <TerminalIcon className="w-12 h-12 flex-shrink-0" />
        <span className="flex flex-col">
          <span className="font-bold text-lg tracking-tight whitespace-nowrap leading-tight">
            Vinícius Baptista de Mello
          </span>
          <span className="text-sm tracking-tight whitespace-nowrap">
            Next.JS SSR with TailwindCSS
          </span>
        </span>
      </a>
    </Link>
  )
}

export default Logo
