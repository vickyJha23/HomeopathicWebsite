import React from 'react'
import { FaTimes } from "react-icons/fa";
import NavLinks from './NavLinks';
import Logo from './Logo';

const HamburgerMenu = ({isVisible, setIsVisible}) => {
    console.log(isVisible);
      if(!isVisible){
         return null;
      }
  return ( <div className='h-screen w-full fixed top-0 left-0 bg-[#1E1D23]'>
              <button onClick={setIsVisible} className='text-white absolute top-6 right-6'>
                   <FaTimes size={28} />     
              </button>
              <div className='w-3/4 mx-auto h-full px-6 py-32  flex justify-center'>
                  <div>
                  <Logo /> 
                  <NavLinks flexDirection={"flex-col"} textDecoration='uppercase' size={"text-2xl"} isActive={false} />
                  </div>
              </div>  
       </div>)   
}


export default HamburgerMenu
