import React, { useState, useEffect, useRef} from 'react'
import { FaArrowUp } from "react-icons/fa6";

const TopLink = () => {
   const [isTopLinkVisible, setTopLinkVisibility] = useState(false);
   const topLinkRef = useRef(null);
   useEffect(() => {
       window.addEventListener("scroll", () => {
           if(window.scrollY > 500) {
             console.log(window.scrollY);
                 setTopLinkVisibility(true);
           }
           else {
               setTopLinkVisibility(false);
           }
       })
   }, [])
   useEffect(() => {
       if(topLinkRef.current){
            topLinkRef.current.addEventListener("click", () => {
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                  })
            })
        }
   }, []) 
  return (
    <div ref={topLinkRef} className={`hidden fixed bottom-5 right-3 w-[50px] h-[50px] bg-blue-500 shadow-sm shadow-blue-500 rounded-md ${isTopLinkVisible ? "!grid": "hidden"} place-items-center cursor-pointer transition-all duration-200 ease-linear z-[500]`}>
       <FaArrowUp size={28} color='white' />
    </div>
  )
}

export default TopLink
