import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import {FoodMeals} from '../components'
import { foods } from '../components/Data'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineStar} from 'react-icons/ai'
import {FaTimes} from 'react-icons/fa'
const Meals = ({openDetailModal}) => {
  const[rating]=useState(5)
  const[item,setItem]=useState({})


  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
      setIsOpen(false)
    }
  
    function openModal(product) {
      setIsOpen(true)
      setItem(product)
    }
  return (
    <div className=''>
     
     <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className=" relative z-50 " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
           
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            {/* <div className="flex min-h-full items-center justify-center p-2
             sm:p-4 text-center max-w-xl mx-auto "> */}
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel 
                className="pt-5 p-3 max-h-screen">
                <div className= "  sticky h-[calc(100vh-40px)]  my-auto overflow-y-scroll scrollbar md:max-w-6xl md:mx-auto grid grid-cols-1 md:grid-cols-2 md:bg-white justify-start items-start min-h-full rounded-2xl ">
         <div  className='relative bg-white rounded-t-2xl md:rounded-2xl shadow-lg h-full pb-5  '>
         <div  onClick={closeModal}
             className='flex absolute md:hidden justify-center rounded-lg cursor-pointer
              w-9 h-9 hover:bg-green-50 right-5 top-5 items-center border-white
             active:border-red-400 focus:outline-none focus:ring focus:ring-red-400'>
           <FaTimes size={25} className='text-black  '/>
           </div>
        <div className=' h-full  rounded-md'>
         <img src="/agelgel.jpg" alt="" className='p-4 h-full object-cover rounded-md'/>
        
         </div>
        {/* lower  */}
        
        </div>
       <div  className='relative bg-white px-3 flex flex-col  pt-8  rounded-b-2xl lg:rounded-2xl  '>
           <div onClick={closeModal}
           className='hidden absolute md:flex justify-center rounded-lg cursor-pointer
            w-9 h-9 hover:bg-green-50 right-3 top-5 items-center border-white
            active:border-red-400 focus:outline-none focus:ring focus:ring-red-400'>
           <FaTimes size={25} className='text-black  '/>
           </div>
           <div className='flex flex-col justify-center space-y-3'>
               <h1 className='text-black font-bold text-4xl py-6'>{item.name}</h1>
           <div className='flex space-x-1 p ' >
              {Array(rating).fill().map((_,i)=>(
              <AiOutlineStar size={20} className='text-gray-300  cursor-pointer '/>
              ))}
              </div>
               <h1 className='text-black font-medium text-xl py-6'>ብር <span className='text-4xl font-bold'>{item.price}</span></h1>
           </div>
       <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 pb-4'>
      <button  className='bg-black  p-2  text-white font-bold rounded-lg text-lg' >Add to Cart</button>
      <button className='bg-gradient-to-r from-red-600 to-orange-500 p-2 text-white font-bold rounded-lg text-lg '>Buy now</button>
            </div>

       </div>

    </div>
                </Dialog.Panel>
              </Transition.Child>
            {/* </div> */}
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default Meals