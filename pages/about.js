import Head from "next/head"

export default function About() {
  return (
    <div>
      <Head>
        <title>What is this?</title>
        <meta name="description" content="a public art collection powered by solana" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="main">
        <div className='bg-slate-800 h-screen w-full'>
          <div className="flex justify-center pt-12">
            <div className="grid grid-cols-1 gap-4 w-2/5">
              <h1 className="text-8xl text-white text-center">What is this?</h1>
              <p className="text-2xl text-white text-center">Hi! 👋🏻</p>
              <p className="text-2xl tracking-wider text-white text-center">My name is Zach and I built this in my spare time. It&apos;s a simple dApp where users can upload images and display them publicly alongside others in the collection. All images get uploaded to IPFS and their respective content identifiers are stored in the Solana blockchain for later retrieval.</p>
              <a href="https://github.com/heyztb/crypto-art-wall" target="_blank" rel="noreferrer">
              <div className="flex justify-center text-white text-center pb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-12 h-12" viewBox="0 0 16 16">
                    <path d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.031 1.031 0 0 0 0-1.457"/>
                  </svg>
              </div>
                  <p className="text-3xl text-white text-center">
                      Check out the code on GitHub
                  </p>
                </a>
              <p className="text-xl text-white text-center">
                and if you&apos;d like...
              </p>
              <a href="https://twitter.com/heyztb" target="_blank" rel="noreferrer">
                <div className="flex justify-center text-white text-center pb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-12 w-12" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </div>
                <p className="text-3xl text-white text-center">
                  follow me on twitter for more!
                </p>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}