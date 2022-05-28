import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='bg-black py-5 text-white bottom-0 flex flex-col items-center justify-center'>
        <div className='max-w-3xl   items-center text-center justify-center gap-7 text-md
         mx-auto grid grid-cols-1 md:grid-cols-3 font-medium p-5 md:p-10'>
        <div className=' flex flex-col justify-start items-start space-y-3'>
          <Link to='/'>Home</Link>
          <Link to='/resturants'>Resturants</Link>
          <Link to='/meals'>Meals</Link>
            
           
            
        </div>
        <div className=' flex flex-col justify-start items-start space-y-3' >
        <Link to='/' className='hover:underline'>Terms & conditions</Link>
          <Link to='/' className='hover:underline'>Privacy</Link>
          <Link to='/meals' className='hover:underline'>Community guidelines</Link>
          
        </div>
        <div className='space-y-5 flex flex-col  justify-start items-start text-start'>
        <img src="/go.jpg" alt="" className='h-16  cursor-pointer' />
        <img src="/pngapp.png" alt="" className='h-16  cursor-pointer' />
        </div>
        
        </div>
        <div className='p-3 pb-6'>
        <p className='text-center font-normal text-sm'>© 2022 Binary Technologies plc. All rights reserved.</p>
        <p className='text-center font-normal text-sm py-3'>❓This is not the actual web it is a clone for learning purpose.</p>
        </div>
    </footer>
  )
}

export default Footer