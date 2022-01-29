import { useGetCollectionQuery } from '../../services/collection';
import SubmitArt from './SubmitArt'
export default function ArtWall() {
  const { data, error, isLoading  } = useGetCollectionQuery('', {
    pollingInterval: 5000
  });

  return (
    <div className='flex flex-col justify-center'>
      {isLoading &&
        <div className="flex justify-center">
          <p className="text-lg text-white text-center">Loading collection...</p>
        </div>
      }
      {data && data.collection.length === 0 &&
        <div className="flex justify-center">
          <p className="text-lg text-emerald-400 text-center">No art has been submitted yet! Will you be the first?</p>
        </div>
      }
      {data && data.collection.length > 0 && 
        <div className="grid grid-cols-2">
          {data.collection.map((art, index) => (
            <li key={index}>
              {art.submittedBy.toString()}
            </li>
          ))}
        </div>
      }
      {error && 
        <div className='flex justify-center'>
          <p className='text-lg text-red-400 text-center'>{error}</p>
        </div>
      }
      <SubmitArt />
    </div>
  )
}