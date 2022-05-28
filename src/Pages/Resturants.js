import React from 'react'
import {resturant} from '../components/Data'
import {BiMap} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import ResturantSkeleton from '../skeleton/ResturantSkeleton'


const Resturants = () => {

  const {isLoading,resturants}=useSelector((state)=>state.resturant)

 
  return (
    <>
     
      <h1 className='font-semibold text-3xl text-orange-500 px-6 pt-12'>All shops({resturants?.length})</h1>
   {isLoading? (<ResturantSkeleton />):( <div className='grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-6 m-2'>
{resturants?.map((res)=>(
  <div className='relative flex flex-col m-2  cursor-pointer ' key={res._id}>
    <Link to={`/resturants/${res._id}`}>
    <img src={res.img} alt="" className='rounded-xl w-full  max-h-56 object-cover'
     height={300}/>
  <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75  rounded-xl'>
    </div>
     </Link>
   <button className='absolute right-2 top-4 p-1 px-3 rounded-lg border text-sm border-white text-white font-medium
    bg-gradient-to-r from-red-600 to-orange-500'>follow</button>
    <div className='absolute bottom-2 left-3'>
      <h1 className='font-bold text-white text-2xl'>{res.name}</h1>
      <div className='flex items-center space-x-2 text-white text-sm'><BiMap  size={22}/> <h1>{res.address}</h1></div>
    </div>
   </div>
   ))}
  </div>)}
    </>
  )
}

export default Resturants