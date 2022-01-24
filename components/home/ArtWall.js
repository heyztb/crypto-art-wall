import { useState, useEffect, useCallback } from 'react'
import { useSolana } from '../../hooks/useSolana'
import SubmitArt from './SubmitArt';
export default function ArtWall() {

  const { program, artWallPubKey } = useSolana();
  const [ collection, setCollection ] = useState([])

  const getCollection = useCallback(async () => {
    const account = await program.account.artWallAccount.fetch(artWallPubKey)
    setCollection(account.artCollection);
  }, [artWallPubKey, program.account.artWallAccount])

  useEffect(() => {
    getCollection()
  }, [collection, getCollection])

  return (
    <div>
      {collection.map((art, index) => {
        return (
          <li key={index}>{art.submitted_by}</li>
        )
      })}
      <SubmitArt />
    </div>
  )
}