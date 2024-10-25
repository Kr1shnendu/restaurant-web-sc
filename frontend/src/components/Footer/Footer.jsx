import React from 'react'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='text-white bg-[#323232] flex flex-col items-center gap-8 py-5 lg:px-[8vw] pt-20 mt-24 '>

        <div className="w-full grid grid-cols-[2fr_1fr_1fr] gap-20 ">
           <div className="flex flex-col items-start gap-5">
           <img src= {assets.logo} alt="" />
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque enim nostrum corporis id minus voluptas quas laboriosam voluptatem illo ratione delectus in aperiam, maxime, officiis quo. Tenetur quisquam modi aspernatur!s</p>
           <div className=" w-6 mr-4 flex gap-2 cursor-pointer">
            <img className=''  src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
           </div>
           </div>
           <div className="flex flex-col items-start gap-5">
           <h2 className='text-white'>COMPANY</h2>
           <ul >
            <li className='list-none mb-3 cursor-pointer'>Home</li>
            <li className='list-none mb-3 cursor-pointer' >About Us</li>
            <li className='list-none mb-3 cursor-pointer'>Delivery</li>
            <li className='list-none mb-3 cursor-pointer'>Privacy Policy</li>
           </ul>
           </div>
           
           <div className="flex flex-col items-start gap-5">
            <h2 className='text-white '>Get in touch</h2>
            <ul>
                <li className='list-none mb-3 cursor-pointer'>+1-212-456-7865</li>
                <li className='list-none mb-3 cursor-pointer'>contact@tomato.com</li>
            </ul>
           </div>
          
          
        </div>
        <hr className='w-full h-1 '/>
        
    <p className="foter-copy-r8"></p>
      
    </div>
  )
}

export default Footer
