import React, { useEffect, useState, useRef } from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import imageCollection from '../assets/images/images';
import { GiHamburgerMenu } from "react-icons/gi";

// component imports
import Logo from './Logo';
import HamburgerMenu from './HamburgerMenu';
import NavLinks from './NavLinks';





const Navbar = () => {
   const [isFixed, setIsFixed] = useState(false);
   const [isHamburgerMenuVisible, setIsHamburgerMenuVisible] = useState(false);
   const navRef = useRef(null);

   const handleScrolled = () => {
      if(window.scrollY > 50){
         return setIsFixed(true);
      }
      return setIsFixed(false);
   }
   useEffect(() => {
      window.addEventListener("scroll", handleScrolled)
      return () => {
        window.removeEventListener("scroll", handleScrolled);
      }
   }, []);
   useEffect(() => {
       if(navRef.current){
           const nav = navRef.current;
           const handleClick = (e) => {
                if(e.target.tagName !== "LI"){
                     return;
                }
                const id = e.target.textContent.toLowerCase();
                const element = document.getElementById(id);
                if(!element){
                    console.log(`No element found with this ${id}`);
                    return;
                }
                const position = element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({ top: position, behavior: "smooth" });

           } 
          nav.addEventListener("click", handleClick);
           return () => {
               nav.removeEventListener("click", handleClick);
           }  
       }
   }, [])

  return (
      <div id='home' className='absolute top-0 left-0 z-10 w-full'>
       <div className='flex flex-col lg:flex-row justify-between items-center px-[2rem]'>
        <div className='hidden lg:flex items-center justify-center'>
             <button className='text-[1.5rem] text-white py-[0.15rem] px-[0.5rem]'>
             <IoSearchOutline />
             </button>
             <input className='w-[120px] font-greatVibes tracking-wide placeholder:text-white py-[0.15rem] placeholder:tracking-wide px-[0.5rem] border-none outline-none bg-transparent text-white text-[1.5rem]' placeholder='Search' type="text" />
        </div>
        <div className='block'>
            <Logo />
        </div>
        <div className='hidden lg:block'>
             <p className='flex items-center gap-4 text-white font-greatVibes text-[1.5rem]'>
                <span>
                    <FiPhoneCall />
                </span>
                <span>
                  +91 99846-46466
                </span>
             </p>
        </div>
        <div className='lg:hidden'>
           <button className='text-white text-xl' onClick={() => {
               setIsHamburgerMenuVisible(true);
           }}>
               <GiHamburgerMenu />
           </button>
        </div>
         </div>
         <div ref={navRef} className={`hidden lg:flex justify-center items-center mt-[1.5rem] ${isFixed ? "fixed top-0 left-0 w-full bg-[#3E484D] !mt-0 py-[0.5rem]": ""}`}>
            <NavLinks isActive={true} />
       </div>
        <HamburgerMenu isVisible={isHamburgerMenuVisible} setIsVisible={() => setIsHamburgerMenuVisible(false)} /> 

      </div>
  )
}

export default Navbar