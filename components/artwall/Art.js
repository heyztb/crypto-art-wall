import Image from 'next/image';

export default function Art({ art }) {

  const shortenAddress = (address) => {
    return `${address.slice(0, 4)}..${address.slice(-4, address.length)}`
  }

  const address = shortenAddress(art.submittedBy.toString());

  return (
    <div>
      <Image alt={`An art piece submitted by ${address}`} src={art.url} height={336} width={336} />
      <p className='text-sm text-white text-center'>{`Submitted by ${address}`}</p>
    </div>
  )
}