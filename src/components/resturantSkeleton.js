import React from 'react'

const resturantSkeleton = () => {
    const Counter=18
  return (
    <div className='grid grid-flow-row-dense grid-cols-1
     sm:grid-cols-3 md:grid-cols-3'>
       {Array(Counter).fill(
           <div className='relative flex flex-col flex-grow m-1  cursor-pointer space-y-2'>
            <div className='bg-gray-500 h-64 max-w-48 rounded-xl animate-pulse' >
            </div>
            <div className='flex flex-grow w-36 h-6 bg-gray-500 rounded-xl animate-pulse ml-2 overflow-hidden'></div>
            <div className='absolute bottom-12 left-2 w-36 h-6 bg-gray-400 rounded-xl animate-pulse'></div>
            <div className='absolute bottom-12 right-2 w-6 h-6 bg-gray-400 rounded-md animate-pulse'></div>
           </div>
       )}
    </div>
  )
}

export default resturantSkeleton