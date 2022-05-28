import {useState,useEffect} from 'react'
import {Banner,About,FoodMeals} from '../components'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {BiMap} from 'react-icons/bi'
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";
import ResturantSkeleton from '../skeleton/ResturantSkeleton'
const Home = ({openDetailModal}) => {
  const {isLoading,resturants}=useSelector((state)=>state.resturant)
 

  return (

    <div>
        <Banner />
        <div className='mt-16 sm:mt-10 '>
       <div className='flex items-center justify-between p-5 sm:px-10 '>
 
         <h1 className='font-bold text-orange-500  text-3xl md:text-4xl '>Special offers</h1>
         <Link to='/special'>
         <p className='font-bold text-slate-800 text-md cursor-pointer'>see all</p>
         </Link>
       </div>
        <FoodMeals openDetailModal={openDetailModal}/>
        </div>
        <div className='mt-10 '>
       <div className='flex items-center justify-between p-5 sm:px-10 '>
 
         <h1 className='font-bold text-orange-500  text-3xl md:text-4xl '>Local favourites</h1>
         <Link to='/resturants'>
         <p className='font-bold text-slate-800 text-md cursor-pointer'>see all</p>
         </Link>
       </div>
       {isLoading? (<ResturantSkeleton />):( <div className='grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-6 m-2'>
{resturants?.slice(1,6).map((res)=>(
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
        </div>
        <About />
    </div>
  )
}

export default Home