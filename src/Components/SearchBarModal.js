import React from 'react'

export const SearchBarModal = ({ setErrorModal }) => {
  return (
    <div className='modal'>
      <div className='centeredModal '>
        <div className='modalBackground bg-white rounded-md border-2'>
          <div className='flex justify-end'>
            <button onClick={() => setErrorModal(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>

            </button>
          </div>
          <div className='modalContent flex flex-col items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 md:w-14 h-14">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>

            <h1 className='modalErrorText text-center mb-3 md:my-5'>Input required for search </h1>
            <div className='closeModalDiv flex justify-center'>
              <button className='closeModalBtn bg-red-500 rounded-md py-1 px-2' onClick={() => setErrorModal(false)}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
