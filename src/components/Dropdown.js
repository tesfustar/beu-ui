import {useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'
import { logout} from '../redux/userReducer'
import {useDispatch,useSelector} from 'react-redux'
const Dropdown = ({isOpen,onToggle}) => {
  const user=JSON.parse((localStorage.getItem('profile')))
  const {isSuccess,isError,isLoading} = useSelector((state)=>state.user)
const dispach =useDispatch()
  const handleLogout=()=>{
    dispach(logout())
    // setUser(null)
  }

  
  return (
    <div className={isOpen ? 'fixed w-full top-0 h-[100vh] right-0  z-50 grid grid-cols-1 gap-5 bg-white text-center space-y-3 py-5' : 'hidden'}
    onClick={onToggle}>
       <div onClick={onToggle} className='absolute top-5 left-5 border-2 border-red-300 p-1 rounded-lg'>
          <FaTimes size={20} className='flex md:hidden cursor-pointer text-red-400'/>
          </div>
      <div className='flex flex-col  justify-start items-center  space-y-10 pt-16 px-10 mr-10'>
         <NavLink to='/'
          className={({ isActive }) => 
        [
          "group flex items-center  text-base font-medium rounded-md",
          isActive ? " text-red-600   font-bold     text-lg " : null,
        ]
         
        }>Home</NavLink>
        <NavLink to='/special' className={({ isActive }) => 
        [
          "group flex items-center  text-base font-medium rounded-md",
          isActive ? " text-red-600   font-bold     text-lg " : null,
        ]
         
        }>special</NavLink>
        <NavLink to='/resturants' className={({ isActive }) => 
        [
          "group flex items-center  text-base font-medium rounded-md",
          isActive ? " text-red-600   font-bold     text-lg " : null,
        ]}>Resturants</NavLink>
         <button onClick={handleLogout}  className={user ? 'cursor-pointer bg-gradient-to-r from-red-600 to-orange-500 p-1 px-3 rounded-md text-white font-medium' : 'hidden'}>logout</button>
      </div>

    </div>




  )
}

export default Dropdown