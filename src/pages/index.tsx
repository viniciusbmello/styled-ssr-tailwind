import type { NextPage } from 'next'
import { CodeIcon } from '@heroicons/react/solid'
import Head from 'next/head'

const Home: NextPage = () => {
  const githubButtonClickHandle = () => {
    document.location.href =
      'https://github.com/viniciusbmello/styled-ssr-tailwind'
  }

  return (
    <>
      <Head>
        <title>TailwindCSS Test</title>
        <meta
          name="description"
          content="Vinícius Baptista de Mello test SSR with TailwildCSS"
        />
      </Head>

      <section className="flex flex-col justify-center items-center space-y-10 mt-12 sm:mt-24">
        <div className="space-y-4 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold capitalize">
            <span className="block">TailwindCSS</span>
            <span className="block">Server-Side Rendering</span>
          </h1>
          <h2 className="text-xl sm:text-2xl pb-14">Checkout on github!</h2>
          <button
            type="button"
            onClick={githubButtonClickHandle}
            className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 rounded-md border-2 border-blue-600 hover:border-blue-800 text-lg sm:text-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 whitespace-nowrap"
          >
            <p className="flex items-center space-x-1">
              <span>
                <CodeIcon className="w-6 h-6 flex-shrink-0" />
              </span>
              <span>GitHub</span>
            </p>
          </button>
        </div>
      </section>
    </>
  )
}

export default Home
