import Head from 'next/head'
export default function Home() {
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* TODO: Write logic to retrieve art and display it here */}
          </div>
        </div>
      </main>
    </div>
  )
}
