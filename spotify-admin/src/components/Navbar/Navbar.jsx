import React from 'react'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div 
      className='navbar w-full border-b-2 border-gray-800 px-5 sm:px-12 py-4 text-lg relative'
      style={{
        backgroundImage: `url(${assets.logo})`,
        backgroundSize: '200px', // Adjust size based on preference
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        opacity: 0.2, // Adjust the transparency to make it a watermark
      }}
    >
      <p className='relative z-10'>Admin Panel</p>
    </div>
  )
}

export default Navbar
