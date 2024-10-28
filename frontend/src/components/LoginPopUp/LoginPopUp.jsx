import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const LoginPopUp = ({setShowLogin}) => {
    const[currState,setCurrState]=useState("Login")
  return (
    <div className=' z-10 absolute w-full bg-[#00000090] grid h-[100%] ' >
        <form  className=" w-[max(23vw,330px)] text-gray-800 bg-gray-300 flex flex-col gap-6 px-6 py-7 border-r-5 place-self-center">
            <div className="flex justify-between items-center text-slate-900 font-bold">
                <h2>{currState}</h2>
                <img className='w-4 cursor-pointer' onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="flex flex-col gap-5">
                {currState==="Login"?<></>:<input type="text" placeholder='your name' required />}
                
                <input className=' border border-black' type="email" placeholder='your email' required />
                <input className='border border-black' type="password" placeholder='your password' required />
            </div>
            <button className='border-none bg-red-500 text-white '> {currState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-pop-up-condition">
                <input   className='flex' type="checkbox" required />
                <p>By continuing, i agree to the terms of use and privacy policy</p>
            </div>
            {currState==="Login"?<p>Create a new account? <span className='cursor-pointer' onClick={()=>setCurrState("Sign Up")} >Click here</span> </p>
            :<p>Already have an account? <span className='cursor-pointer' onClick={()=>setCurrState("Login")}  >Login here</span></p>
            }
        </form>
      
    </div>
  )
}

export default LoginPopUp
