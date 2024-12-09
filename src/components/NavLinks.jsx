import React, {useRef, useEffect} from 'react'

const NavLinks = ({flexDirection = "flex-row", textDecoration="capitalize", size, setIsVisible}) => {
    const ulRef = useRef(null);
    useEffect(() => {
        const ul = ulRef.current;
        if(!ul){
            return;
        }  
        ul.addEventListener("click", (e) => {
             if(e.target.tagName !== "LI" ){
                 return;
             }
             const activeLink = ul.querySelector(".active");
             if(!activeLink){
                 return;
             }
             activeLink.classList.remove("active");
             e.target.classList.add("active");
             const id = e.target.textContent.toLowerCase();
             console.log(id);
             const element = document.getElementById(id);
             const position = element.getBoundingClientRect().top + window.scrollY;
             window.scrollTo({
                left: 0,
                top: position,
                behavior: "smooth"
             })
             setIsVisible(false);
        })
    }, [])

  return (
    <ul ref={ulRef} className={`flex ${flexDirection} space-y-4 lg:space-y-0  text-white font-Times ${textDecoration} ${size}`}>
                  <li className={`px-[1.5rem] py-[0.5rem] bg-transparent rounded-tl-[40px] rounded-tr-[2px] rounded-br-[40px] rounded-bl-[2px] cursor-pointer active text-center select-none`}>Home</li>
                  <li className='py-[0.5rem] px-[1.5rem] bg-transparent rounded-tl-[40px] rounded-tr-[2px] rounded-br-[40px] rounded-bl-[2px] hover:text-blue-500 transition-all duration-200 ease-linear cursor-pointer select-none'>About Us</li>
                  <li className='py-[0.5rem] px-[1.5rem] bg-transparent rounded-tl-[40px] rounded-tr-[2px] rounded-br-[40px] rounded-bl-[2px] hover:text-blue-500 transition-all duration-200 ease-linear
                  cursor pointer select-none'>Services</li>
                  <li className='py-[0.5rem] px-[1.5rem] bg-transparent rounded-tl-[40px] rounded-tr-[2px] rounded-br-[40px] rounded-bl-[2px] hover:text-blue-500 transition-all duration-200 ease-linear cursor-pointer select-none'>Contacts</li>
      </ul>
  )
}

export default NavLinks
