import React,{useState} from 'react'
import {assets} from '../../assets/assets'
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';


const Navbar = ({setShowLogin}) => {
  const [menu,setMenu] =useState("home");
  const {getTotaCartAmount}=useContext(StoreContext)
  return (
         /**Navbar */
       <div className='px-5 py-0 flex justify-between items-center'>
        
       
        <Link to='/'><img src={assets.logo} alt="" className="w-40" /></Link>
        
        <ul className="flex list-none gap-5 text-gray-800 text-sm lg:gap-5 lg:text-[17px]  ">
          <Link to='./'  onClick= {()=>setMenu("home")} className={menu==="home"?"pb-0.5 border-b-2 border-solid border-[#49557e] cursor-pointer":""}>home</Link>
          <a href='#explore-menu-id' onClick= {()=>setMenu("menu")} className={menu==="menu"?"pb-0.5 border-b-2 border-solid border-[#49557e] cursor-pointer":""}>menu</a>
          <a href='#app-download-id' onClick= {()=>setMenu("mobile-app")} className={menu==="mobile-app"?"pb-0.5 border-b-2 border-solid border-[#49557e] cursor-pointer":""}>mobile-app</a>
          <a href='#footer-id' onClick= {()=>setMenu("contact us")} className={menu==="contact us"?"pb-0.5 border-b-2 border-solid border-[#49557e] cursor-pointer":""}>contact us</a>
        </ul>

        <div className='flex items-center gap-8'>
          <img className='w-6 ml-2' src={assets.search_icon} alt="" />
          
          <div className="relative">
           <Link to='/Cart'> <img src={assets.basket_icon} alt="" /> </Link> 
          
              <div className={getTotaCartAmount()===0?"":'absolute min-w-2 min-h-2 bg-red-600 rounded-[5px] top-[-8px] right-[-8px]'}></div>
              
            </div>
          
          
          <button onClick={()=> setShowLogin(true)}  className='bg-transparent text-xs text-purple-900 border-2 border-gray-400 py-3 px-10 rounded-3xl cursor-pointer hover:bg-red-100 transition duration-300 '>sign in</button>
        </div>

       </div>
    
  )
}

export default Navbar
