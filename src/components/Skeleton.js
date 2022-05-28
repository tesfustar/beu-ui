import React from 'react'

const Skeleton = () => {
    const Counter=18
  return (
    <div className='grid grid-flow-row-dense grid-cols-2 m-3
     sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3'>
       {Array(Counter).fill(
           <div  className='relative flex flex-col flex-grow m-1 animate-pulse cursor-pointer space-y-2'>
            <div className='bg-gray-300 h-44 max-w-48 rounded-xl ' >
            </div>
            <div className='flex flex-grow w-36 h-6 bg-gray-300 rounded-xl  ml-2 overflow-hidden'></div>
            <div className='absolute bottom-12 left-2 w-32 sm:w-36 h-6 bg-gray-200 rounded-xl '></div>
            <div className='absolute bottom-12 right-2 w-6 h-6 bg-gray-200 rounded-md '></div>
           </div>
       )}
    </div>
  )
}

export default Skeleton