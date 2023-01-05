import type { NextPage } from 'next'
import Head from 'next/head'
import { Tablero } from '../components/ui'
import { ChessProvider, DragProvider } from '../context'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ajedrez</title>
      </Head>
      <ChessProvider>
        <DragProvider>
          <Tablero />
        </DragProvider>
      </ChessProvider>
    </div>
  )
}

export default Home
