import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-2'>
        <img className='h-6' src={assets.logo} alt="logo" />
        <img className='w-10' src={assets.profile_image} alt="profile" />
    </div>
  )
}

export default Navbar