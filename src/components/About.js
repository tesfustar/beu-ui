import React, { useState } from 'react'
import {AiFillStar} from 'react-icons/ai'

const About = () => {
    const[amount] =useState(5)
  return (
    <>
    {/* about us  */}
    <div className='md:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center m-10 p-10 '>
    <div className='  h-96 w-52 md:w-64 lg:w-96 flex items-center justify-center'>
        <img src="/images/img2.webp" alt="" className=' '/>
    </div>
    <div className='space-y-5'>
        <p className='font-bold text-orange-600'>WHAT THEY SAY</p>
        <h1 className='font-semibold text-black text-4xl sm:text-5xl'>What Our Customers Say About Us</h1>
        <p className='text-md font-normal text-slate-600'>From buying our morning coffee to big-ticket items like
             a new car, we depend on our network’s opinions,
             advice, or perspectives for making the right decision.</p>
             <div className='flex items-center space-x-4  '>
              <img src="/images/pic-2.png" alt="" className='h-16 w-16  rounded-full' />
            <div className='flex flex-col '>
                <p className='font-bold text-lg text-slate-900'>Solana Williams</p>
                <div className='flex space-x-1 '>
                  {Array(amount).fill().map((_,i)=>(
                    
                    <AiFillStar size={20} className='text-yellow-400  cursor-pointer ' key={i}/>
                    ))}
                    </div>
            </div>
             </div>
    </div>
    </div>
    {/* about app  */}

    <div className='m-4 md:max-w-6xl md:mx-auto grid grid-cols-1 md:grid-cols-2 bg-orange-100/50 rounded-lg
    items-center my-5  p-10 '>
    
    <div className='space-y-5'>
        <p className='font-bold text-orange-600'>DOWNLOAD APP</p>
        <h1 className='font-bold text-black text-[38px] sm:text-5xl'>The Best Of <span className='text-orange-600'>beU </span> 
            With Just One App</h1>
        <p className='text-md font-normal text-slate-600'>The convenience to access 
        distants restaurants from the comfort of your couch</p>
             <div className='flex items-center space-x-4  '>
              {/* <img src="/images/pic-2.png" alt="" className='h-16 w-16  rounded-full' />
              <img src="/images/pic-2.png" alt="" className='h-16 w-16  rounded-full' /> */}
             </div>
        </div>
    <div className='h-auto w-auto items-center'>
        <img src="/images/beu.webp" alt="" className=''/>
    </div>
    </div>
    {/* contact page  */}
     <div className='bg-gradient-to-r from-red-600 to-orange-500 items-center'>
         <div className='md:max-w-xl mx-auto flex flex-col items-center text-center py-20'>
         <h3 className='text-white font-medium text-xl pb-2'>Tell us what you think about 
         <span className='font-bold text-2xl'> beU</span>  !</h3>
          <div className='grid grid-col-3 gap-2 px-3 md:px-10 items-center justify-center'>
          <div className='grid grid-cols-2 gap-1  '>
         <input type="text" placeholder="name"
         className="w-full p-3 rounded-md  border-transparent focus:border-transparent focus:ring-0
        text-center font-bold"/>
              <input type="email" placeholder="Email"
         className="w-full p-3 rounded-md  border-transparent focus:border-transparent focus:ring-0 text-center font-bold"/>
              </div>
              <div className='w-full mt-1'>
                  
              <textarea name="" id="" cols="30" rows="4" className='w-full p-5 rounded-md  border-transparent focus:border-transparent focus:ring-0 text-center font-bold'
               placeholder='message'></textarea>
              </div>
              <button className='bg-white w-32   p-3 font-bold text-lg text-orange-600 rounded-md '>submit</button>
            </div>
         </div>

       </div>
        
    </>
  )
}

export default About