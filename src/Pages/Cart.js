import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState,useRef } from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {MdDelete} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import '../components/style.css'
import {createOrder, reset} from '../redux/orderReducer'
import {FaLongArrowAltLeft,FaMoneyBillAlt,FaTimes} from 'react-icons/fa'
import { removeProduct,decreaseCart,increaseCart,clearCart, cartTotal } from '../redux/cartReducer'
const Cart = () => {
  let [isOpen, setIsOpen] = useState(false)
  const cart = useSelector((state)=>state.cart)
  const[name,setName]=useState('')
  const[phoneNo,setPhoneNo]=useState('')
  const[address,setAddress]=useState('')
  const dispach=useDispatch()
  const navigate = useNavigate()
  const user =JSON.parse((localStorage.getItem('profile')))
  const {isOrdering,isSuccess,message}=useSelector((state)=>state.order)
  const userId =user?.result?._id
  const handleSubmit=(event)=>{
   event.preventDefault()
   const amount = cart.cartTotalAmount + 15;
    const orderItems={userId:userId,phoneNo:phoneNo, name:name,
      products:cart.cartItems.map((item)=>({productId: item.id, productName:item.title,
        quantity: item.quantity,})),amount:amount, address:address}
     dispach(createOrder(orderItems))
  }
  function closeModal() {
      setIsOpen(false)
    }
    function openModal() {
      setIsOpen(true)
    }

  

  useEffect(()=>{
    dispach(cartTotal())
  },[cart,dispach])
  const removerItem=(cartItem)=>{
    dispach(removeProduct(cartItem))
  }
  const handleDecrease=(cartItem)=>{
    dispach(decreaseCart(cartItem))
  }
  const handleIncrease=(cartItem)=>{
    dispach(increaseCart(cartItem))
  }
  const clearAll=()=>{
    dispach(clearCart())
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
    <div className='md:max-w-5xl md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 items-center m-2 '>
    <div className="  mt-10   w-full">
        
       
        <div className='flex-grow w-full'>
           <div className="flex flex-col p-5 space-y-5 w-full">
             {cart.cartItems.length === 0 ? (
               <h3 className='text-center text-xl font-bold text-slate-800 pb-36'>Your cart is empty</h3>
             ):
             (

            <div>
              <span  className='text-red-500 font-semibold cursor-pointer hover:underline mx-5'
              onClick={clearAll}>clear cart</span>
          {cart.cartItems?.map((cartItem)=>(
        <div className="flex items-center justify-between bg-slate-200 p-2 rounded-xl my-2">
           <div  className=' flex items-center justify-center '>

            <img src={cartItem.img}  height={100} width={200} 
            className='rounded-xl w-20 h-20 md:w-24   md:h-24 object-cover'/>
          <div className="pl-2">
          <h2 className="text-gray-700 text-xs sm:text-lg font-bold">{cartItem.name}</h2>
          <p className="line-clamp-2 text-xs md:text-md ">{cartItem.description}</p>
          <h2 className="text-gray-700  text-sm font-bold">{cartItem.price}</h2>
          <MdDelete onClick={()=>removerItem(cartItem)}
          size={20} className='text-red-500  cursor-pointer  '/>
       </div>
           </div>
    
       <div className='flex-col space-y-1 items-center text-right justify-end'>
         
         
       <h2 className="text-gray-700  text-sm font-bold">{cartItem.price * cartItem.cartQuantity}</h2>
       <div className='flex space-x-1'>
                      <button onClick={()=>handleDecrease(cartItem)}
                      className='cursor-pointer rounded-md justify-center items-center text-center
                      shadow-lg bg-sky-100 w-6 h-6 text-orange-600 font-bold'>-</button>
                      <span>{cartItem.cartQuantity}</span>
                      <button  onClick={()=>handleIncrease(cartItem)}
                      className='cursor-pointer rounded-md 
                      shadow-lg bg-sky-100 w-6 h-6 text-orange-600 font-bold'>+</button>
                  </div>
                 
                      </div>
      
              </div>
          ))}
          </div>
          )}
            </div>
           </div>
           </div>
     
        
          {/* right side*/}
           <div className={cart.cartItems.length === 0? "hidden" : "bg-white shadow-xl md:w-96 flex flex-col flex-warp p-3 mr-3"}>
           <h2 className="flex font-bold text-2xl text-orange-500
           items-center justify-center">Order Summary</h2>
          
           <div className="flex flex-row justify-between items-center  my-1 ">
           <h2 className="flex text-md font-semibold text-gray-900">Subtotal</h2>
           <h2 className="flex text-md font-semibold text-gray-900">{cart.cartTotalAmount } Br</h2>
           </div>
           <div className="flex flex-row justify-between items-center  my-1 ">
           <h2 className="flex text-md font-semibold text-gray-900">Shipping Cost</h2>
           <h2 className="flex text-md font-semibold text-gray-900">15<span>Br</span> </h2>
           </div>
           <div className="flex flex-row justify-between items-center  my-1 ">
           <h2 className="flex text-md font-semibold text-gray-900">Total</h2>
           <h2 className="flex text-md font-semibold text-gray-900">{cart.cartTotalAmount + 15}Br</h2>
           </div>
             <button  onClick={user ? openModal : pleaseLogin }
             className="w-full bg-gradient-to-r from-orange-600 to-orange-500 px-4  
             flex-grow py-2 text-white font-medium text-lg rounded-md ">Checkout Now</button>
           </div>
        </div>
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
            <div className="flex min-h-full items-center justify-center p-2
             sm:p-4 text-center max-w-md mx-auto ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-red-500 text-center"
                  >
                   Order now
                  </Dialog.Title>
                   
                  <div className='flex flex-col flex-grow w-full py-2 space-y-2'>
        <input  type="text" placeholder='name'  onChange={(e)=>setName(e.target.value)}
        className='rounded-md  border-transparent focus:border-transparent focus:ring-0 bg-sky-100 '/>
                    <input type="number" placeholder='phone No' onChange={(e)=>setPhoneNo(e.target.value)}
                    className='rounded-md  border-transparent focus:border-transparent focus:ring-0 bg-sky-100' />
                    <textarea name=""  placeholder='Your address' onChange={(e)=>setAddress(e.target.value)}
           className='border-transparent focus:border-transparent focus:ring-0 w-full p-2 rounded-md   bg-sky-100'
           id="" cols="30" rows="2"></textarea>
            {message && <div  class="flex p-4 mb-4 bg-white rounded-lg " role="alert">
      <svg class="flex-shrink-0 w-5 h-5 text-red-500 dark:text-blue-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
     <div class="ml-3 text-sm font-medium text-red-500 dark:text-blue-800">
      {message}
       </div>
 
    </div>
      }
            <div  className=' flex   cursor-text space-x-2 justify-start'>
                  <FaMoneyBillAlt size={25} className='text-green-600  '/>
                  <p className=' font-normal text-gray-400 text-lg'>cash at delivery</p>
                  </div>
                    <button onClick={handleSubmit}
                    className='bg-gradient-to-r from-orange-600 to-orange-500 border-2 
              p-2  font-medium text-lg text-white rounded-lg '> Submit Order</button>
                
                  </div>

                  
              
                 
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog> 
      </Transition>
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
           </>
  )
}

export default Cart 