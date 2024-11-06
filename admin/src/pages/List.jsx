import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { TrashIcon } from '@heroicons/react/24/outline'

const List = () => {

  const url = "https://restaurant-web-backend.onrender.com";

  const [list, setList] = useState([]);

  const fetchList = async() => {
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data);
    
    if(response.data.success) {
      setList(response.data.data);
    } else {
      toast.error(response.data.message)
    }
  }

  const deleteFood = async(itemId) => {
    const response = await axios.post(`${url}/api/food/remove`,{ id: itemId })
    if(response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.success)
    }
    await fetchList();
    
  }

  useEffect(()=> {
    fetchList();
  },[]);

  return (
    <div className='pt-5 px-2 text-slate-600 font-medium bg-slate-50 col-span-4 text-xs sm:text-base lg:text-xl'>
      <p>All Foods List</p>
      <div className='border border-slate-950'>
        <div className='grid grid-cols-5 items-center border border-black'>
          <b className='border'>Image</b>
          <b className='border'>Name</b>
          <b className='border'>Category</b>
          <b className='border'>Price</b>
          <b className='border'>Action</b>
        </div>
        {
          list.map((item, index)=> {
            return (
              <div key={index} className='grid grid-cols-5 items-center p-2 border border-black'>
                <img className='h-10' src={`${url}/images/${item.image}`} alt='' />
                <p className='border'>{item.name}</p>
                <p className='border'>{item.category}</p>
                <p className='border'>{item.price}</p>
                <button className='border' onClick={() => deleteFood(item._id)}>
                  <TrashIcon className='text-red-800 h-5 sm:h-6 lg:h-7 m-auto'/>
                </button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default List