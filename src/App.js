import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {Dropdown,Footer,Navbar,ScrollToTop} from './components';
import Home from './Pages/Home';
import Meals from './Pages/Meals';
import Resturants from './Pages/Resturants';
import Special from './Pages/Special';
import ResturantFood from './Pages/ResturantFood';
import Cart from './Pages/Cart';
import Search from './Pages/Search';
import { FaAngleUp } from "react-icons/fa";
import Success from './Pages/Success'

const App = () => {
  const [isOpen,setIsOpen]=useState(false);

 
    const onToggle=()=>{
      setIsOpen(!isOpen)
    }

  useEffect(()=>{
const hideMenu=()=>{
  if(window.innerWidth > 768 && isOpen){
      setIsOpen(false)
  }
} 
window.addEventListener('resize',hideMenu);
return()=>{
  window.removeEventListener('resize',hideMenu)
}})

const goToTop = () => {
window.scrollTo({
    top: 0,
    behavior: "smooth",
});
};
  return (
    <>
        <div className="">
         <FaAngleUp
                    className="fixed bottom-10 right-5  cursor-pointer
                    rounded-full text-white z-50 bg-gradient-to-r from-orange-600 to-orange-500"
                    onClick={goToTop}
                    size={30}
                />
          
        </div>
     <Router>
    <ScrollToTop />
     <Dropdown isOpen={isOpen} onToggle={onToggle} />
     <Navbar onToggle={onToggle} />
        
      <Routes >
     
       <Route path='/' element={<Home />} />
       <Route path='/meals' element={<Meals />} />
       <Route path='/resturants' element={<Resturants/>} />
       <Route path='/special' element={<Special />} />
       <Route path='/cart' element={<Cart />} />
       <Route path='/resturants/:id' element={<ResturantFood />} />
       <Route path='/success' element={<Success />} />
       <Route path='/search' element={<Search />} />
      </Routes>
    
     <Footer />
    </Router>
       
          </>
  )
}

export default App
