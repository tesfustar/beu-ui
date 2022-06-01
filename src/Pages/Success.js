import React, { useEffect } from 'react'
import {runFireWork} from '../components/util'
import {BsBagCheckFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
const Success = () => {
  useEffect(()=>{
    runFireWork()
  })
  return (
    <div className='flex items-center justify-center w-full h-96 py-10 p-2'>
      <div className='max-w-xl mx-auto flex flex-grow flex-col rounded-md p-2 space-y-2
       justify-center items-center bg-gradient-to-r from-red-600 to-orange-500 py-4'>
      <BsBagCheckFill color='#fff' size={25}/>
      <div className='flex flex-col items-center justify-center'>
      <h2 className='font-medium text-white text-sm'>Thank you.your order is successfully submitted.</h2>
      <h2 className='font-medium text-white'>please check your phone for delivery.</h2>
      </div>
      <Link to='/'>
      <button className='font-bold bg-white rounded-md p-2 px-4 text-orange-500 '>Continue Buying</button>
      </Link>
      </div>
      
    </div>
  )
}

export default Success