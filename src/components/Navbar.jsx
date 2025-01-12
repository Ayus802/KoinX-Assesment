import React, { useState } from 'react'
import DropdownMenu from './Dropdown'

export default function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div 
      className=' h-6 p-6 w-screen flex items-center justify-between shadow-lg fixed bg-white'>
        <img 
            className='h-5'
            src="https://www.koinx.com/releases/_next/static/media/Logo.cdf70f30.svg" alt="" />
        <div className='font-semibold text-sm hidden md:block'>
            <a className='mx-3' href="">Crypto Taxes</a>
            <a className='mx-3' href="">Free Tools</a>
            <a className='mx-3' href="">Resource Center</a>
            <a className='mx-3 text-white px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-blue-700' href="">Get Started</a>
        </div>
        <img 
          className='block sm:hidden h-6'
          onClick={()=> isOpen?setIsOpen(false):setIsOpen(true)}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlvI1_CVlt_u4RO6gUscWHYF94L4rLNEI0gA&s" alt="" />
    </div>
          <DropdownMenu isOpen={isOpen}/>
          </>
  )
}