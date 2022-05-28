import React from 'react'

const ResturantSkeleton = () => {
  const Counter=9
  return (
    <div className='grid grid-flow-row-dense grid-cols-1
     sm:grid-cols-3 '>
       {Array(Counter).fill(
           <div className='relative flex flex-col flex-grow m-2 animate-pulse  cursor-pointer space-y-2'>
            <div className='bg-gray-300 h-48 max-w-44 rounded-xl ' >
            </div>
            <div className='absolute bottom-3 flex flex-grow w-36 h-6 bg-gray-200 rounded-xl  ml-2 overflow-hidden'></div>
           
            <div className='absolute top-3 right-2 w-12 h-8 bg-gray-200 rounded-md '></div>
           </div>
       )}
    </div>
  )
}

export default ResturantSkeleton