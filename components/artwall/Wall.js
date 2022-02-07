import { useGetCollectionQuery } from '../../services/collection';
import Art from './Art';
import Submit from './Submit'

export default function Wall() {
  const { data, error, isLoading  } = useGetCollectionQuery('', {
    pollingInterval: 5000
  });

  return (
    <div className="bg-slate-800 w-full h-full">
      <div className='flex flex-col justify-center'>
        <div className="pb-12">
          <Submit />
        </div>
        {isLoading &&
          <div className="flex h-screen justify-center">
            <p className="text-lg text-white text-center">Loading collection...</p>
          </div>
        }
        {data && data.collection.length === 0 &&
          <div className="flex justify-center">
            <p className="text-lg text-emerald-400 text-center">No art has been submitted yet! Will you be the first?</p>
          </div>
        }
        {data && data.collection.length > 0 && 
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 mx-auto pb-12">
            {data.collection.map((art, index) => (
              <Art key={index} art={art} />
            ))}
          </div>
        }
        {error && 
          <div className='flex justify-center'>
            <p className='text-lg text-red-400 text-center'>{error.message}</p>
          </div>
        }
      </div>
    </div>
  )
}