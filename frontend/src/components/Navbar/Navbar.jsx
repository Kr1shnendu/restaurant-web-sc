import React,{useState} from 'react'
import {assets} from '../../assets/assets'
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'


const Navbar = ({setShowLogin}) => {
  const [menu,setMenu] =useState("home");
  const {getTotaCartAmount}=useContext(StoreContext)
  return (
         /**Navbar */
       <div className='p-2 flex justify-between items-center bg-white rounded-2xl shadow-lg'>
        
       
        <Link to='/'><img src={assets.logo} alt="" className="h-12"  /></Link>
        
        <ul className="navbar-menu hidden lg:flex list-none text-gray-800 gap-5"> 
          <Link to='./'  onClick= {()=>setMenu("home")} className={menu==="home"?"pb-0.5 border-b-2 border-solid border-[#49557e] cursor-pointer":""}>home</Link>
          <a href='#explore-menu-id' onClick= {()=>setMenu("menu")} className={menu==="menu"?"pb-0.5 border-b-2 border-solid border-[#49557e] cursor-pointer":""}>menu</a>
          <a href='#app-download-id' onClick= {()=>setMenu("mobile-app")} className={menu==="mobile-app"?"pb-0.5 border-b-2 border-solid border-[#49557e] cursor-pointer":""}>mobile-app</a>
          <a href='#footer-id' onClick= {()=>setMenu("contact us")} className={menu==="contact us"?"pb-0.5 border-b-2 border-solid border-[#49557e] cursor-pointer":""}>contact us</a>
        </ul>

        <div className=' navbar r8 flex items-center gap-8 '>
          {/* <img className=' w-6 ml-2' src={assets.search_icon} alt="" /> */}
          
          <div className="relative">
            <Link to='/Cart'>
              <ShoppingCartIcon className='h-12 text-amber-800'/>
            </Link>
          
              <div className={getTotaCartAmount()===0?"":'absolute min-w-2 min-h-2 bg-red-600 rounded-[5px] top-[-8px] right-[-8px]'}></div>
              
            </div>
          
          
          <button onClick={()=> setShowLogin(true)}  className=' navbar-button  bg-transparent text-xs text-purple-900 border-2 border-gray-400 py-3  rounded-3xl cursor-pointer hover:bg-red-100 transition duration-300 h-12 w-24 px-3 sm:px-4 md:px-5 lg:px-6  '>sign in</button>
        </div>

       </div>
    
  )
}

export default Navbar
