import type { NextPage } from 'next'
import Head from 'next/head'
import { Tablero } from '../components/ui'
import { DragProvider } from '../context'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ajedrez</title>
      </Head>
      <DragProvider>
        <Tablero />
      </DragProvider>
    </div>
  )
}

export default Home
