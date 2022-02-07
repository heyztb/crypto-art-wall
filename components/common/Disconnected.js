export default function Disconnected() {
  return (
    <div className="bg-slate-800 w-full h-screen">
      <div className="flex flex-col justify-center space-y-2">
        <h1 className="text-2xl text-center text-slate-50">
          Your wallet is not connected
        </h1>
        <p className="text-xl text-center text-slate-50">Please connect your Solana wallet in order to view the collection.</p>
      </div>
    </div>
  )
}