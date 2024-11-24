import React from 'react'

const NavLinks = ({flexDirection = "flex-row", textDecoration="capitalize", size, isActive = false}) => {
  
  return (
    <ul className={`flex ${flexDirection}  text-white font-Times ${textDecoration} ${size}`}>
                  <li className={`${isActive ? "active": "text-white"} text-black px-[1.5rem] py-[0.5rem] rounded-tl-[40px] rounded-tr-[2px] rounded-br-[40px] rounded-bl-[2px]`}>Home</li>
                  <li className='py-[0.5rem] px-[1.2rem] hover:text-blue-500 transition-all duration-200 ease-linear'>About Us</li>
                  <li className='py-[0.5rem] px-[1.2rem] hover:text-blue-500 transition-all duration-200 ease-linear'>Services</li>
                  <li className='py-[0.5rem] px-[1.2rem] hover:text-blue-500 transition-all duration-200 ease-linear'>Contacts</li>
      </ul>
  )
}

export default NavLinks
