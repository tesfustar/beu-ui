import React from 'react'
import {FaLongArrowAltLeft,FaMoneyBillAlt,FaTimes} from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/cartReducer'
const AddCart = ({continueShopping,shopping,seeDetail,product}) => {
  const dispach=useDispatch()

  const addToCart=()=>{
       dispach(addProduct(product))
    }
  return (
    <div className={shopping ?  'fixed top-0 z-50 overflow-hidden px-3  w-screen min-h-screen bg-slate-500/90' : 'hidden'}>
    <div className="shadow-2xl sticky max-h-[550px] md:max-h-screen 
     my-auto overflow-y-scroll top-10 z-50 mx-3 md:max-w-6xl md:mx-auto grid 
     grid-cols-1 md:grid-cols-2 md:bg-green-100 justify-center items-center min-h-full rounded-2xl ">
         <div  className='relative bg-white rounded-t-2xl items-center 
         md:rounded-2xl shadow-lg min-h-full justify-center'>
             <div onClick={continueShopping}
           className='fixed flex  md:hidden justify-center rounded-lg cursor-pointer
            w-9 h-9 hover:bg-green-50 right-12 top-12 items-center border-white
            active:border-red-400 focus:outline-none focus:ring focus:ring-red-400'>
           <FaTimes size={25} className='text-black  '/>
           </div>
             <div className='flex items-center justify-center p-10'>

                <img src="/images/five.jpg" alt="" height={300} width={200}
                 className='flex items-center justify-center rounded-xl w-full h-full object-cover' />
                </div>
        </div>
       <div  className='relative bg-white px-3 flex flex-col h-full 
        pt-8 md:bg-green-100 rounded-b-2xl lg:rounded-2xl  '>
           <div onClick={continueShopping}
           className='hidden absolute md:flex justify-center rounded-lg cursor-pointer
            w-9 h-9 hover:bg-green-50 right-3 top-5 items-center border-white
            active:border-red-400 focus:outline-none focus:ring focus:ring-red-400'>
           <FaTimes size={25} className='text-black  '/>
           </div>
       <div className='flex flex-col w-full h-full  px-3 lg:px-5 space-y-5 my-3'>
       <h1 className='flex text-slate-800 text-4xl font-bold md:pb-5'>Special Burger</h1>
          <p className='  font-bold text-xl text-slate-800'>ብር <span className='text-3xl'>89</span> </p>
           <p>Special Offer Special Burger</p>
          
          <div className='flex w-full space-x-2'>
          <button onClick={()=>addToCart(product)}
          className="w-full bg-black px-4 hover:bg-slate-500 
             flex-grow py-2 text-white font-semibold text-xl rounded-md ">Add to bag</button>
              <button onClick={continueShopping}
              className="w-full bg-orange-600 px-4  
             flex-grow py-2 text-white font-semibold text-xl rounded-md ">Buy now</button>
          </div>
            </div>
                 
       </div>
       </div>
    </div>
  )
}

export default AddCart