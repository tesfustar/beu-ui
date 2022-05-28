import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState ,useRef} from 'react'

import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineStar} from 'react-icons/ai'
import { useDispatch,useSelector } from 'react-redux'
import { addProduct } from '../redux/cartReducer'
import {createOrder, reset} from '../redux/orderReducer'
import {useNavigate} from 'react-router-dom'
import {FaLongArrowAltLeft,FaMoneyBillAlt,FaTimes} from 'react-icons/fa'
import AddCart from './AddCart'
import Skeleton from './Skeleton'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'
const FoodMeals = () => {
  let [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const[name,setName]=useState('')
  const[phoneNo,setPhoneNo]=useState('')
  const[address,setAddress]=useState('')
  const dispach=useDispatch()
  const user =JSON.parse((localStorage.getItem('profile')))
  const {isLoading,foods}=useSelector((state)=>state.food)
  const userId =user?.result?._id
  const {isOrdering,isSuccess,message}=useSelector((state)=>state.order)
 
 const handleSubmit=(event,item)=>{
  event.preventDefault()
   const amount = item.price +15 
   const orderItems={userId:userId,phoneNo:phoneNo, name:name,products:[{ productId: item.id,
    productName:item.name,
    quantity:1,}],amount:amount, address:address}
    dispach(createOrder(orderItems))
 }

  const addToCart=(product)=>{
       dispach(addProduct(product))
    }
   
    const[rating]=useState(5)
   
    const[item,setItem]=useState({})
    function closeModal() {
        setIsOpen(false)
      }
    
      function openModal(product) {
        setIsOpen(true)
        setItem(product)
      }
  
      
      useEffect(()=>{
        if(isSuccess){
          setIsOpen(false)
          navigate('/success')
        }
        dispach(reset())
      },[isSuccess,isOpen])
      const toastId = useRef(null);
      const pleaseLogin=()=>{
        toast.error('please signin first!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
    
      if(isOrdering){
      return (
        <>
       
         
            <Transition appear show={isOrdering} as={Fragment}>
            <Dialog as="div" className=" relative z-40 " onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
               
              >
                <div className="fixed inset-0 bg-black bg-opacity-30" />
              </Transition.Child>
      
              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-2
                 sm:p-4 text-center max-w-sm mx-auto ">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className=" flex items-center justify-center
                    overflow-hidden rounded-2xl bg-slate-900 p-4 text-left 
                    align-middle shadow-xl transition-all">
                    
                  
                      <div className="lds-spinner">
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          </div>
                     
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
         
        </>
      
       )
      }
  return (
      <>
       {isLoading ?  (<Skeleton />) :(<div className='grid grid-flow-row-dense grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
          {foods?.map((product)=>(
              <div className='relative flex flex-col m-3 sm:m-1  cursor-pointer ' key={product._id}>
                <div onClick={()=>openModal(product)}
                className='flex items-center justify-center cursor-pointer '>
                      
              <img src={product.img} alt="" className='rounded-xl w-full h-40 sm:h-44 object-cover'
           height={300}/>
              </div>
              <div className='relative bottom-[35px] flex justify-between items-center px-3'>
              <div className='flex space-x-1 bg-black rounded-full p-1 bg-opacity-40' >
              {Array(rating).fill().map((_,i)=>(
              <AiOutlineStar size={15} className='text-white  cursor-pointer '/>
              ))}
              </div>
              
              <div onClick={()=>addToCart(product)}
               className='justify-end bg-gradient-to-r from-red-600 to-orange-500 p-1 rounded-lg border border-white cursor-pointer '>
                 
    <AiOutlinePlus size={20} className='text-white  cursor-pointer '/>

                 
              </div>
              
              </div>
              <div className='relative bottom-5'>
              <h1 className='font-bold text-md text-gray-400 line-through'>BIRR {product.price +30} </h1>
              <h1 className='font-bold text-lg'>BIRR <span className='text-orange-600'>{product.price}</span> </h1>
              <p className='text-slate-800 text-md font-semibold'>{product.name}</p>
              </div>
              <AddCart className='hidden' />
              </div>
          ))}

        </div>)}
     

        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className=" relative z-40 " onClose={closeModal}>
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
                <div className= "  sticky h-[calc(100vh-40px)]      my-auto overflow-y-scroll scrollbar   md:max-w-6xl md:mx-auto grid grid-cols-1 md:grid-cols-2 md:bg-green-100 justify-start items-start min-h-full rounded-2xl ">
         <div  className='relative bg-white rounded-t-2xl md:rounded-2xl shadow-lg h-full pb-5  '>
         <div  onClick={closeModal}
           className='flex absolute md:hidden justify-center rounded-lg cursor-pointer
            w-9 h-9 hover:bg-green-50 right-3 top-5 items-center border-white
            active:border-red-400 focus:outline-none focus:ring focus:ring-red-400'>
           <FaTimes size={25} className='text-black  '/>
           </div>
        <div className=' m-2 p-2 md:m-4'>
          <h1 className='hidden md:flex md:pl-3 text-slate-800 text-4xl font-bold md:pb-10'>Order summary</h1>
          <h1 className='flex md:hidden md:pl-3 text-slate-800 text-4xl font-bold md:pb-10'>Billing info</h1>
          <p className='md:pl-3 font-bold text-xl text-slate-800'>In the bag</p>
          <div className='flex items-center justify-between p-2 bg-slate-100 m-1 sm:m-2 py-5 rounded-lg '>
              <div  className='flex flex-row items-center w-full row-span-2 space-x-1'>
                  <div className='flex items-center justify-center w-24 '>

                  <img src={item.img} alt="" height={300} width={200}
                   className='rounded-xl w-full h-24 object-cover' />
                  </div>
                  <div  className='flex flex-col space-y-1 md:w-24 lg:w-auto'>

                  <h3 className=' text-black text-md md:text-xl font-bold'>{item.name}</h3>
                  <p  className='hidden sm:flex md:w-32 lg:w-60 text-sm 
                   font-semibold text-gray-500 md:text-md'>Firfir Gomen Banatu | fasting Enjera firfir,
                       Gomen Kitfo,</p>
                  </div>
              </div>
              <div className='flex-col flex-1 space-y-1  justify-end text-right w-full'>
                  <h4 className='text-gray-300 text-xl  sm:text-2xl font-bold line-through'>ብር{item.price +30}</h4>
                  <h4 className='text-slate-900 text-2xl font-bold'>ብር{item.price}.00</h4>
                  <div className='space-x-2'>
                      <button className='cursor-not-allowed rounded-md 
                      shadow-md bg-sky-100 w-7 h-7 text-orange-600 font-semibold'>-</button>
                      <span>1</span>
                      <button className='cursor-not-allowed rounded-md 
                      shadow-md bg-sky-100 w-7 h-7 text-orange-600 font-semibold'>+</button>
                  </div>
              </div>

          </div>
        </div>
        {/* lower  */}
        <div className='flex flex-col m-2 p-4 md:m-5 space-y-1 text-md font-bold border-t-[1px] py-5'>
            <div  className='pt-5 flex flex-row items-center justify-between text-gray-500 font-semibold '>
                <p>Subtotal</p>
                <p>+ ብር{item.price}</p>
            </div>
            <div   className='flex flex-row items-center justify-between text-gray-500 font-semibold '>
            <p>Packaging fee</p>
                <p>+ ብር0</p>
            </div>
            <div   className='flex flex-row items-center justify-between text-gray-500 font-semibold '>
                <p>Delivery cost ( unknown)</p>
                <p>+ ብር15</p>
            </div>
            <div   className='flex flex-row items-center justify-between text-slate-800 font-semibold  '>
            <p className='font-bold text-lg '>Total</p>
            <p>ብር{item.price +15}</p>
            </div>
            
            <div 
            // onClick={(seeDetail,continueShopping)}
            className='flex items-center  cursor-pointer space-x-2'>
            <FaLongArrowAltLeft size={25} className='text-orange-600  '/>
                <span className='font-bold text-orange-500 text-lg' onClick={closeModal}>Continue Shopping</span>
            </div>
        </div>
        </div>
       <div  className='relative bg-white px-3 flex flex-col  pt-8 md:bg-green-100 rounded-b-2xl lg:rounded-2xl  '>
           <div onClick={closeModal}
           className='hidden absolute md:flex justify-center rounded-lg cursor-pointer
            w-9 h-9 hover:bg-green-50 right-3 top-5 items-center border-white
            active:border-red-400 focus:outline-none focus:ring focus:ring-red-400'>
           <FaTimes size={25} className='text-black  '/>
           </div>
       <div className='w-full grid grid-row-2 gap-2 px-3 lg:px-5 items-center justify-center my-3'>
       <h1 className='hidden md:flex  text-slate-800 text-4xl font-bold md:pb-5'>Billing info</h1>
          <p className='  font-bold text-xl text-slate-800'>Beneficiary</p>
              <div className='grid grid-cols-2 gap-1 '>
              <input type="text" placeholder="your name" name="name" onChange={(e)=>setName(e.target.value)}
         className="w-full p-3 rounded-md focus:outline bg-green-50 md:bg-white
         border-transparent focus:border-transparent focus:ring-0 text-center font-bold" required/>
         <input type="number" placeholder="phone number" name="phone" onChange={(e)=>setPhoneNo(e.target.value)}
         className="w-full p-3 rounded-md focus:outline bg-green-50 md:bg-white
         border-transparent focus:border-transparent focus:ring-0 text-center font-bold" required/>
              </div>
              <div className='w-full'>
            <h1 className='text-slate-800 text-md md:text-xl font-bold py-2  '>Delivery address</h1>
              <textarea  id="" cols="30" rows="2" name="address" onChange={(e)=>setAddress(e.target.value)}
               className='w-full p-5 rounded-md focus:outline bg-green-50 md:bg-white
                border-transparent focus:border-transparent focus:ring-0 text-center font-bold'
               placeholder='your address' required></textarea>
              </div>
              {message && <div  class="flex p-4 mb-4 bg-white rounded-lg " role="alert">
      <svg class="flex-shrink-0 w-5 h-5 text-red-500 dark:text-blue-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
     <div class="ml-3 text-sm font-medium text-red-500 dark:text-blue-800">
      {message}
       </div>
 
    </div>
      }
        <ToastContainer
       position="top-right"
       autoClose={5000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       />
              <div className='space-y-1'>
               <h3  className='text-slate-800 text-xl font-bold '>Payment method</h3>
                  <div  className='pb-10 flex items-center text-center  cursor-pointer space-x-2 '>
                  <FaMoneyBillAlt size={25} className='text-green-600  '/>
                  <p className=' font-normal text-gray-400 text-lg'>cash at delivery</p>
                  </div>
              <button onClick={user ? event =>handleSubmit(event,item) : pleaseLogin }
              className='bg-gradient-to-r from-orange-600 to-orange-500 border-2 border-white 
              p-2 px-5 font-bold text-lg text-white rounded-lg '>submit order</button>
              </div>
            </div>
                 
       </div>

    </div>
                </Dialog.Panel>
              </Transition.Child>
            {/* </div> */}
          </div>
        </Dialog>
      </Transition>
      

     </>
  )
}

export default FoodMeals