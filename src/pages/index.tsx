import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mello CV</title>
        <meta name="description" content="Vinícius Baptista de Mello CV" />
      </Head>

      <section className="flex flex-col justify-center items-center space-y-10 mt-12 sm:mt-24">
        <div className="space-y-4 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold capitalize">
            <span className="block">The blogging platform</span>
            <span className="block">for developers</span>
          </h1>
          <h2 className="text-xl sm:text-2xl">
            Start your developer blog, share ideas and content with the dev
            community!
          </h2>
        </div>
      </section>
    </>
  )
}

export default Home
