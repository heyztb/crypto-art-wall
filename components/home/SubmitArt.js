export default function SubmitArt() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center bg-slate-700 opacity-75 rounded-md w-2/5 h-24">
        <label htmlFor="upload-art" className="w-full h-full flex flex-col">
          <div className="flex flex-col items-center justify-center pt-5 space-y-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <p className="pt-1 text-sm tracking-wider text-gray-400">Upload art</p>
          </div>
          <input type="file" name="upload-art" id="file-upload" className="opacity-0" />
        </label>
      </div>
    </div>
  )
}