import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { Link ,useParams} from 'react-router-dom'
import {BiMap} from 'react-icons/bi'
import {RiArrowRightSFill} from 'react-icons/ri'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineStar} from 'react-icons/ai'
import ResFood from '../skeleton/ResFood'
import Skeleton from '../components/Skeleton'
import {FaTimes} from 'react-icons/fa'
import { addProduct } from '../redux/cartReducer'
import { useDispatch,useSelector } from 'react-redux'
import { getSingleResturants } from '../redux/resturantReducer'
const ResturantFood = () => {
  const {id}=useParams()
    const buttons=['All products','Uncatagorized']
    const [active,setActive]=useState(1)
    const[rating]=useState(5)
    const dispach=useDispatch()
    const {isLoading,resturant}=useSelector((state)=>state.resturant)
    const[item,setItem]=useState({})
    console.log(resturant)
      const addToCart=(item)=>{
           dispach(addProduct(item))
        }
    let [isOpen, setIsOpen] = useState(false)
  
    function closeModal() {
        setIsOpen(false)
      }
    
      function openModal(product) {
        setIsOpen(true)
        setItem(product)
      }
      useEffect(()=>{
        dispach(getSingleResturants(id))
      },[id])

    
  return (
    <>
   <header className='sticky top-16 w-full z-40  flex items-center space-x-3 text-lg sm:text-2xl p-4  font-bold bg-white'>
        <Link to='/resturants'>
        <h1 className='text-black hover:underline'>Resturants</h1>
        </Link>
        <RiArrowRightSFill size={20}/>
        <Link to='/resturants'>
          <h1 className='text-orange-500 hover:underline' >{resturant?.name}</h1> 
        </Link>
    </header>

    {isLoading ? (<ResFood/>):( <div className='m-3 relative flex flex-col '>
        <img src={resturant?.img} alt="resturant image" 
        className='flex flex-grow object-cover rounded-lg w-full h-64 lg:h-96'/>
        <div className='absolute inset-0 bg-black opacity-60  rounded-xl'>
    </div>
    <button className='absolute right-2 top-4 p-1 px-4 rounded-lg border text-md border-white text-white font-medium
    bg-gradient-to-r from-red-600 to-orange-500'>follow</button>
    <div className='absolute bottom-2 left-3'>
      <h1 className='font-bold text-white text-2xl'>{resturant?.name}</h1>
      <div className='flex items-center space-x-2 text-white'><BiMap  size={22}/> <h1>{resturant?.address}</h1></div>
    </div>
    </div>)}

    <div className='sticky top-28 w-full z-40  flex items-center space-x-3   p-4   bg-white'>
        {buttons.map((btns,i)=>(
            <button  onClick={()=>setActive(i)}
            className={i===active ?'bg-gradient-to-r from-red-600 to-orange-400 font-bold px-3 rounded-full text-white p-1' : 'font-bold text-black px-3 p-1 border border-gray-300 rounded-full hover:bg-gradient-to-r from-red-600 to-orange-400 hover:text-white'}
            >{btns}</button>
        ))}

    </div>

    {isLoading ? (<Skeleton />):(<div className='mx-2 grid grid-flow-row-dense grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 '>

    {resturant?.foods?.map((food)=>(
              <div className='relative flex flex-col m-1  cursor-pointer ' key={food._id}>
                <div 
                onClick={()=>openModal(food)}
                className='flex items-center justify-center cursor-pointer '>
                      
              <img src={food?.img} alt="" className='rounded-xl w-full h-44 object-cover'
           height={300}/>
              </div>
              <div className='relative bottom-[35px] flex justify-between items-center px-3'>
              <div className='flex space-x-1 bg-black rounded-full p-1 bg-opacity-40' >
              {Array(rating).fill().map((_,i)=>(
              <AiOutlineStar size={15} className='text-white  cursor-pointer '/>
              ))}
              </div>
              
              <div 
              onClick={()=>addToCart(food)}
               className='justify-end bg-gradient-to-r from-red-600 to-orange-500 p-1 rounded-xl border border-white cursor-pointer '>
                 
    <AiOutlinePlus size={20} className='text-white  cursor-pointer '/>

                 
              </div>
              
              </div>
              <div className='relative bottom-5'>
              <h1 className='font-bold text-lg'>BIRR <span className='text-orange-600'>{food.price}</span> </h1>
              <p className='text-slate-800 text-md font-semibold'>{food.name}</p>
              </div>
    
              </div>
          ))}
    </div>)}


    {/* //start */}
    
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
                <div className= "  sticky h-[calc(100vh-40px)]  my-auto overflow-y-scroll scrollbar md:max-w-6xl md:mx-auto grid grid-cols-1 md:grid-cols-2 md:bg-white justify-start items-start mi-h-full rounded-2xl">
         <div  className='relative bg-white rounded-t-2xl md:rounded-2xl shadow-lg h-full   '>
         <div  onClick={closeModal}
             className='flex absolute md:hidden justify-center rounded-lg cursor-pointer
              w-9 h-9 hover:bg-green-50 right-5 top-5 items-center border-white
             active:border-red-400 focus:outline-none focus:ring focus:ring-red-400'>
           <FaTimes size={25} className='text-black  '/>
           </div>
        <div className=' h-full  rounded-md'>
         <img src={item?.img} alt="" className='p-4 h-full object-cover rounded-3xl '/>
        
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
       <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 pb-12'>
      <button onClick={()=>addToCart(item)} className='bg-black  p-2  text-white font-bold rounded-lg text-lg' >Add to Cart</button>
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
        
    </>
  )
}

export default ResturantFood