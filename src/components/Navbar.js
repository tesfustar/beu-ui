import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import {FaSearch,FaBars,FaUserAlt,FaGoogle} from 'react-icons/fa'
import {BiShoppingBag} from 'react-icons/bi'
import {GoSearch} from 'react-icons/go'
import { Link,NavLink,useLocation,useNavigate } from 'react-router-dom'
import { signGoogle ,logout,signByEmail,loginByEmail,signFacebook} from '../redux/userReducer'
import {useDispatch,useSelector} from 'react-redux'
import GoogleLogin from 'react-google-login';
import './style.css'
import {reset} from '../redux/userReducer'
import { gapi } from 'gapi-script'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import decode from 'jwt-decode'

const Navbar = ({onToggle}) => {
  const[isSearching,setIsSearching]=useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const [isSignUp,setIsSignUp] = useState(false)
  const user =JSON.parse((localStorage.getItem('profile')))
  const location=useLocation()
  const navigate =useNavigate()
  const {isSuccess,isError,isLoading,message} = useSelector((state)=>state.user)
 
 const [formData,setFormData]=useState({
     name:'',
     email:'',
     password:''
 })


 const handleChange=(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value})
 }

  const dispach=useDispatch()
  function closeModal() {
      setIsOpen(false)
    }
    function openModal() {
      setIsOpen(true)
    }

    const toggle=()=>{
      setIsSignUp(!isSignUp)
    }
    function closeIsLoading() {
      isLoading=false
    }

  
  const search=()=>{
    return(
      setIsSearching(!isSearching)   
   )
  }

  
const handleSubmit=(e)=>{
   e.preventDefault()
  if(isSignUp){
     dispach(signByEmail(formData))
  }else{
     dispach(loginByEmail(formData))
  }
  
}
useEffect(()=>{
  dispach(reset())
},[isOpen])



useEffect(()=>{
function start(){
  gapi.auth2.init({clientId:"331051806915-me39illbj0ok62tavqspm76oam0vapfk.apps.googleusercontent.com",scope:""})
}
gapi.load('client:auth2',start)
},[])

const handleLogout=()=>{
  dispach(logout())
  setIsOpen(false)
}

useEffect(()=>{
  const token =user?.token
  if(token){
    const decodedToken=decode(token)
    if(decodedToken.exp *1000 < new Date().getTime()){
      handleLogout()
    }
  }
})
const successGoogle=async(res)=>{
 const response = res?.profileObj
 const token =res?.tokenObj.id_token
 dispach(signFacebook({response,token}))
 
}

const failureGoogle=(error)=>{
 console.log(error)
}
const responseFacebook = (response) => {
  const token =response?.accessToken
  dispach(signGoogle({response,token}))
}


  const SearchContainer=()=>{
    return(
      <>
      <div  
      className={isSearching ? 
        'm-5 md:max-w-xl flex flex-grow px-5 items-center rounded-md space-x-2 md:mx-auto bg-sky-50 p-3  border-y-2 border-orange-400  ' :"hidden"}>
        <FaSearch size={15} className='text-gray-500  cursor-pointer '/>
          <input type="text" name="" id="" 
          className='flex-grow  border-transparent focus:border-transparent focus:ring-0  bg-transparent font-medium text-gray-600 '
          placeholder='search a resturant or a meal' />
        </div>
      
       </>
   
    )
  }

  if(isLoading){
   
  return (
  <>
 
   
      <Transition appear show={isLoading} as={Fragment}>
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
    <header className='sticky top-0 z-40 w-full items-center  bg-gradient-to-r from-red-600 to-orange-500 md:bg-gradient-to-r md:from-white md:to-white
       flex justify-between md:px-10'>
        {/* left */}
        <Link to='/'>
        <div className='relative flex items-center py-2 '>
            <img src="/images/beucolor.png" alt="" className='h-16 hidden md:flex' />
            <img src="/images/beu white.png" alt="" className='h-12 flex md:hidden' />

            <h1 className='flex font-bold ml-[-10px] text-white md:text-orange-500 text-xl sm:text-3xl'>BeU</h1>
        </div>
        </Link>
        {/* midddle */}
        <div className='hidden md:flex items-center  lg:space-x-8 '>
          <NavLink  to='/' 
className={({ isActive }) => 
[
  "group flex items-center  text-base font-medium rounded-md",
  isActive ? " text-red-600  text-lg " : null,
]
 
}
   > Home </NavLink>
         <NavLink to='/special'  
        className={({ isActive }) => 
        [
          "group flex items-center  text-base font-medium rounded-md",
          isActive ? " text-red-600  text-lg " : null,
        ]
         
        }>
         Special  
         </NavLink> 
         <NavLink to='/resturants'  
        className={({ isActive }) => 
        [
          "group flex items-center  text-base font-medium rounded-md",
          isActive ? " text-red-600  text-lg " : null,
        ]
         
        }>
         Resturants  
         </NavLink>
      
        </div>
        {/* right */}
        <div className='flex items-center justify-end space-x-4 pr-5'>
          <div >
          <GoSearch size={20} onClick={search}
          className={isSearching ? 'text-white md:text-red-600 cursor-pointer ' :'text-white md:text-gray-600 cursor-pointer'}/>
          </div>
        
            <NavLink to='/cart'  
          className={({ isActive }) => 
          [
            "group flex items-center  text-base font-medium rounded-md",
            isActive ? " text-slate-700 border-[3px]  border-red-300 rounded-xl font-bold  p-1  text-lg " : null,
          ]
           
          }>
          <div >
             <BiShoppingBag size={25} className='text-white md:text-gray-600  cursor-pointer '/>
             {/* <span className='absolute right-[-30px]   items-center rounded-full
             text-center font-bold text-sm  animate-bounce'>(cart)</span> */}
          </div>
             </NavLink>
             <div  >
            {user ? <button onClick={handleLogout} 
            className='hidden sm:flex cursor-pointer bg-gradient-to-r
             from-red-600 to-orange-500 p-1 px-3 rounded-md text-white font-medium'>log out</button> :  
            <FaUserAlt onClick={ openModal}  size={20} className='flex  cursor-pointer text-white md:text-black'/>}
         
          </div>
          <div onClick={onToggle} >
          <FaBars size={18} className='flex md:hidden cursor-pointer text-white'/>
          </div>
        </div>
    </header>
    <SearchContainer />
    <Transition appear show={!user && isOpen} as={Fragment}>
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
            <div className="fixed inset-0 bg-black bg-opacity-60" />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
  {message && <div id="alert-1" class="flex p-4 mb-4 bg-blue-100 rounded-lg dark:bg-blue-200" role="alert">
  <svg class="flex-shrink-0 w-5 h-5 text-blue-700 dark:text-blue-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <div class="ml-3 text-sm font-medium text-blue-700 dark:text-blue-800">
    {message}
  </div>
 
</div>
}
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-red-500 text-center"
                  >
                    {isSignUp ?'Sign Up' : 'Log in'}
                  </Dialog.Title>
                  <div className='flex flex-col flex-grow w-full py-2 space-y-2'>
                    <form className='flex flex-col justify-center w-full space-y-2' onSubmit={handleSubmit}>
                    {isSignUp && <input  type="text" placeholder='name' onChange={handleChange} name="name"
                    className='rounded-md bg-sky-100  border-2  border-transparent focus:border-transparent focus:ring-0'/>}
                    <input type="email" placeholder='email' onChange={handleChange} name="email"
                    className='rounded-md  border-2  border-transparent focus:border-transparent focus:ring-0 bg-sky-100 ' />
                    <input type="password" placeholder='password' onChange={handleChange} name="password"
                    className='rounded-md border-2  border-transparent focus:border-transparent focus:ring-0  bg-sky-100 ' />
                    <button  
                    className='bg-gradient-to-r from-red-600 to-orange-500 border-2 
              p-2  font-bold text-lg text-white rounded-lg '> {isSignUp ?'Sign Up' : 'Log in'}</button>
                  </form>
                  {!isSignUp &&  
                  <div className='flex flex-col justify-center w-full space-y-2'>
                   <span className='text-center font-semibold text-gray-500'>or</span>
                  <GoogleLogin 
                  clientId="331051806915-me39illbj0ok62tavqspm76oam0vapfk.apps.googleusercontent.com"
                  render={renderProps => (
                    <button  onClick={renderProps.onClick} disabled={renderProps.disabled}
                     className=' bg-slate-800 cursor-pointer border-2 p-2 font-medium text-lg
                      text-white rounded-lg'> Sign in with Google </button>
                    )}
                    onSuccess={successGoogle}
                    onFailure={failureGoogle}
                    cookiePolicy={'single_host_origin'}
                    
                    />
               
                    {/* <FacebookLogin
                      appId="1655010851522515"
                      autoLoad={false}
                      fields="name,email,picture"
                      // onClick={componentClicked}
                      callback={responseFacebook}
                      render={(renderProps) => (
                        <button  onClick={renderProps.onClick}  className='bg-blue-600 cursor-pointer border-2 p-2 font-medium text-lg text-white rounded-lg'> Sign in with facebook </button>
                        )}
                      />, */}
                    </div>
                      }
                  <p className='text-sm text-center font-mmedium text-gray-700
                   cursor-pointer' onClick={toggle}>{isSignUp ? "already have account" : "Don't have account? create now"}</p>
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


export default Navbar