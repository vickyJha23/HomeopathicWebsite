import React from 'react'

const Button = ({ buttonText, parent, onClick }) => {
  if (parent === "Services") {
    return (
      <button onClick={onClick} className='bg-blue-500 !w-auto hover:bg-[#91B058] transition-all duration-200 ease-linear py-[1rem] px-[3rem] text-white rounded-tl-[40px] rounded-tr-[2px] rounded-br-[40px] rounded-bl-[2px]'>
        {buttonText}
      </button>
    )
  }
    return (
      <button className='bg-blue-500 px-6 text-sm py-2 !w-auto lg:py-[1rem] lg:px-[3rem] text-white hover:bg-[#91B058] transition-all duration-200 rounded-tl-[40px] rounded-tr-[2px] rounded-br-[40px] rounded-bl-[2px]'>
        {buttonText}
      </button>
    )
}

export default Button
