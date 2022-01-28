import { useState, useEffect, useCallback } from 'react'
import { useSolana } from '../../hooks/useSolana'
import SubmitArt from './SubmitArt';
export default function ArtWall() {

  const { program, artWallPubKey } = useSolana();
  const [ collection, setCollection ] = useState([])
  const [ error, setError ] = useState(null)

  const getCollection = useCallback(async () => {
    try {
      const account = await program.account.artWallAccount.fetch(artWallPubKey)
      setCollection(account.artCollection);
    } catch (e) {
      setError("Unable to fetch art collection, refresh and try again.")
    }
  }, [artWallPubKey])

  useEffect(() => {
    getCollection()
  }, [getCollection])

  return (
    <div className='flex flex-col justify-center'>
      {!error && collection.length > 0 && collection.map((art, index) => {
        return (
          <li key={index}>{art.submittedBy.toString()}</li>
        )
      })}
      {!error && collection.length === 0 && 
        <div className="flex-justify-center py-6">
          <p className="text-lg text-emerald-400 text-center">No art has been submitted yet! Will you be the first?</p>
        </div>
      }
      {error && 
        <div className='flex justify-center py-6'>
          <p className='text-lg text-red-400 text-center'>{error}</p>
        </div>
      }
      <SubmitArt />
    </div>
  )
}