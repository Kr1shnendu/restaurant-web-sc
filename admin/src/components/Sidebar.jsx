import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='min-h-[100vh] border border-slate-300 border-t-0 col-span-1'>
      <div className='pt-12 pl-5 lg:pl-10 flex flex-col gap-5'>
        <NavLink to='/add' className='flex flex-col items-center p-2 border-2 border-r-0 focus:border-red-300 focus:bg-red-50 lg:flex-row lg:gap-3 cursor-pointer'>
          <img className='h-8' src={assets.add_icon} alt="add icon" />
          <p className='hidden sm:block lg:text-base'>Add Items</p>
        </NavLink>
        <NavLink to='/list' className='flex flex-col items-center p-2 border-2 border-r-0 focus:border-red-300 focus:bg-red-50 lg:flex-row lg:gap-3 cursor-pointer'>
          <img className='h-8' src={assets.order_icon} alt="add icon" />
          <p className='hidden sm:block lg:text-base'>List Items</p>
        </NavLink>
        <NavLink to='/orders' className='flex flex-col items-center p-2 border-2 border-r-0 focus:border-red-300 focus:bg-red-50 lg:flex-row lg:gap-3 cursor-pointer'>
          <img className='h-8' src={assets.basket_icon} alt="add icon" />
          <p className='hidden sm:block lg:text-base'>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar