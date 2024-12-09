import React, { useEffect, useState, useRef } from 'react'
import { FiPhoneCall } from "react-icons/fi";
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
                console.log(element);
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
      <div id='home' className='absolute top-0 left-0 z-40 w-full'>
       <div className='flex flex-row justify-between items-center px-[1rem] lg:px-[2rem]'>
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
               <GiHamburgerMenu size={28} />
           </button>
        </div>
         </div>
         <div ref={navRef} className={`hidden lg:flex justify-center items-center mt-[1.5rem] ${isFixed ? "fixed z-50 top-0 left-0 w-full bg-[#3E484D] !mt-0 py-[0.5rem]": ""}`}>
            <NavLinks  size={"text-lg"}/>
       </div>
        <HamburgerMenu isVisible={isHamburgerMenuVisible} setIsVisible={() => setIsHamburgerMenuVisible(false)} /> 
      </div>
  )
}

export default Navbar
