import React from 'react'
import {BiShoppingBag,BiMap} from 'react-icons/bi'
import {MdDeliveryDining,MdRestaurant,MdOutlineFastfood} from 'react-icons/md'
import {Link} from 'react-router-dom'


const Banner = () => {
  return (
       <div className=' bg-gradient-to-r from-red-600 to-orange-500 md:bg-gradient-to-r md:from-white md:to-white
       relative items-center grid grid-cols-1 md:grid-cols-6 p-3 pb-10 md:p-5   '>
        {/* left  */}
           <div className=' flex col-span-2 flex-col  flex-warp  space-y-20 sm:space-y-5'>
               <div  className='hidden md:flex  flex-col flex-grow space-y-3'>
            <p className='font-bold text-slate-900 text-lg '>Let us know where you are</p>
            <div className=' flex flex-grow items-center cursor-text w-[70%]
             space-x-3 p-2 rounded-md bg-slate-100'>
            <BiMap size={25} className='text-gray-300 cursor-pointer'/>
            <p className='font-semibold text-gray-300 text-lg'>Olympia</p>
            </div>
               </div>

            <div  className='flex flex-col space-y-3 '>
         <h1 className='font-bold text-6xl md:text-5xl lg:text-[90px] w-38 sm:w-full
          text-white md:text-black '>Always On Time</h1>
            <p className='text-white md:text-slate-900 font-normal text-lg'>Get your meals delivered Fresh, Hot and Ready to eat whenever you need it</p>
            
            <Link to='/resturants'>
            <button className='bg-white md:bg-gradient-to-r from-red-600 to-orange-500  md:hover:bg-orange-700 p-3 w-64
             rounded-md md:text-white text-orange-600 font-bold '>Explore Our Resturants</button>
            </Link>
            </div>
        </div>
         {/* middle  */}
         <div className='hidden md:flex col-span-3'>
             <img src="/images/img1.webp" alt="" />
         </div>
          {/* right  */}
        <div className='absolute hidden md:flex  right-2 
         flex-col space-y-6 items-center justify-end'>
        <div className='flex items-center space-x-2'>
            <div className='bg-white shadow-xl p-3 rounded-lg'>
            <BiShoppingBag size={30} className='text-slate-800 cursor-pointer'/>
            </div>
            <div>
                <h4 className='font-bold text-orange-600 text-lg'>Easy order</h4>
                <p className='text-sm text-gray-400 font-semibold'>In a few clicks</p>
            </div>
        </div>
        {/* two  */}
        <div className='flex items-center space-x-2'>
            <div className='bg-white shadow-xl p-3 rounded-lg'>
            <MdDeliveryDining size={30} className='text-slate-800 cursor-pointer'/>
            </div>
            <div>
                <h4 className='font-bold text-red-600 text-xl'>Fast delivery</h4>
                <p className='text-sm text-gray-400 font-semibold'>It all just take 59 min</p>
            </div>
        </div>
             {/* three  */}
             <div className='flex items-center space-x-2'>
            <div className='bg-white shadow-xl p-3 rounded-xl'>
            <MdOutlineFastfood size={30} className='text-slate-800 cursor-pointer'/>
            </div>
            <div>
                <h4 className='font-bold text-red-600 text-xl'>Pickup</h4>
                <p className='text-sm text-gray-400 font-semibold'>PIckup at Doorstep</p>
            </div>
        </div>
             {/* four  */}
             <div className='flex items-center space-x-2'>
            <div className='bg-white shadow-xl p-3 rounded-xl'>
            <MdRestaurant size={30} className='text-slate-800 cursor-pointer'/>
            </div>
            <div>
                <h4 className='font-bold text-red-600 text-xl'>Dine in</h4>
                <p className='text-sm text-gray-400 font-semibold pr-3'>Enjoy your meal hot</p>
            </div>
        </div>
        </div>
      </div>
  )
}

export default Banner