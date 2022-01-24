import { useWallet } from '@solana/wallet-adapter-react'
import Head from 'next/head'
import ArtWall from '../components/home/ArtWall';
import Disconnected from '../components/home/Disconnected';
export default function Home() {

  const { publicKey } = useWallet();

  return (
    <div>
      <Head>
        <title>Crypto Art Wall</title>
        <meta name="description" content="a public art collection powered by solana" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="main">
        <div className='bg-slate-800 h-[100vh] w-full'>
          <div className='py-10 mx-auto w-96 grid grid-cols-1'>
            <h1 className="font-bold subpixel-antialiased h-16 text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-indigo-400 to-cyan-500">Crypto Art Wall</h1>
            <p className="text-xl sm:text-lg text-slate-50 text-center">A public art collection on the Solana blockchain</p>
          </div>
          {!publicKey && <Disconnected />}
          {publicKey && <ArtWall />}
        </div>
      </main>
    </div>
  )
}