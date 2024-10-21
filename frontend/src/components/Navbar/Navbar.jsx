import React,{useState} from 'react'
import {assets} from '../../assets/assets'

const Navbar = () => {
  const [menu,setMenu] =useState("home")
  return (
   
       <div className='px-5 py-0 flex justify-between items-center'>
        
       
        <img src={assets.logo} alt="" className="w-150" />
        <ul className="flex list-none gap-5 text-gray-800 text-sm  ">
          <li onClick= {()=>setMenu("home")} className={menu==="home"?"pb-0.5 border-b-2 border-solid border-[#49557e] cursor-pointer":""}>home</li>
          <li onClick= {()=>setMenu("menu")} className={menu==="menu"?"pb-0.5 border-b-2 border-solid border-[#49557e] cursor-pointer":""}>menu</li>
          <li onClick= {()=>setMenu("mobile-app")} className={menu==="mobile-app"?"pb-0.5 border-b-2 border-solid border-[#49557e] cursor-pointer":""}>mobile-app</li>
          <li onClick= {()=>setMenu("contact us")} className={menu==="contact us"?"pb-0.5 border-b-2 border-solid border-[#49557e] cursor-pointer":""}>contact us</li>
        </ul>

        <div className='flex items-center gap-10'>
          <img src={assets.search_icon} alt="" />
          
          <div className="relative">
            <img src={assets.basket_icon} alt="" />
            <div className="absolute min-w-2 min-h-2 bg-red-600 rounded-[5px] top-[-8px] right-[-8px]"></div>
          </div>
          
          <button className='bg-transparent text-xs text-purple-900 border-2 border-gray-400 py-3 px-10 rounded-3xl cursor-pointer hover:bg-red-100 transition duration-300'>sign in</button>
        </div>

       </div>
    
  )
}

export default Navbar
