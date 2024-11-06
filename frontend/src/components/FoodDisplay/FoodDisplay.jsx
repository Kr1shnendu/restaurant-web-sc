import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const {food_list} =useContext(StoreContext)
  return ( 
    <div className='mt-7' >
        <h2 className='text-[max(2vw,24px)] text-left font-semibold'>Top dishes near you</h2>
        <div className="grid grid-cols-1  sm:grid-cols-2   md:grid-cols-3     lg:grid-cols-4    gap-5 mt-7  gap-y-12">
        {food_list.map( (item,index)=>{
          if(category==="All" ||category===item.category){
            return (<FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />)

          }

            
        }

        )}
        </div>
      
    </div>
  )
}

export default FoodDisplay

