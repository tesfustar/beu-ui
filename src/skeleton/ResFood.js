import React from 'react'

const resFood = () => {
  return (
        <div className='flex flex-col m-3 sm:m-8 animate-pulse'>
          
    <div className='relative bg-gray-300 w-full h-72 flex flex-col flex-grow rounded-md'>
      <div className='absolute bg-gray-200 top-5 right-5 w-16 h-8 rounded-xl'></div>
      <div className='absolute bg-gray-200 bottom-5 left-5  sm:w-32 h-6 rounded-xl'></div>
   </div>
        </div>
  )
}

export default resFood