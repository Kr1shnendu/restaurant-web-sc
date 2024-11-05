import React from 'react'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='flex flex-col gap-4' id='explore-menu-id'>
        <h1 className='text-[#262626] font-medium text-justify text-2xl' >Explore our menu</h1>
        <p className=' max-w-80   sm:max-w-80  md:max-w-80  lg:max-w-96 text-left text-gray-600'>Choose from a diverse menu featuring a delactable array of dishes crafted with finest ingredients and cluinary expertise.
        our mission is to satisfy your cravings and elevate your dinning 
              experience,one delicious meal at a time.</p>
              <div className="flex justify-between gap-7 items-center my-5 mx-0 overflow-x-scroll">
                {menu_list.map((item,index) =>{
                    return(
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index}className="">
                            <img  className ={category===item.menu_name?"border-4 border-solid border-red-600    w- [7.5vw] min-w-[80px] cursor-pointer rounded-full":""}  src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
              </div>
              < hr  className='mx-10 my-0 h-2 border-none bg-white'/>      
    </div>
  )
}

export default ExploreMenu
