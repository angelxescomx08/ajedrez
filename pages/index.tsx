import type { NextPage } from 'next'
import Head from 'next/head'
import { Tablero } from '../components/ui'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ajedrez</title>
      </Head>
      <Tablero/>
    </div>
  )
}

export default Home
