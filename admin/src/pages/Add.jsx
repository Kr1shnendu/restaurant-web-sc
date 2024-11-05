import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {

  const url = "http://localhost:4000";

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad"
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(data => ({...data,[name]:value}))
  }

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name",data.name);
    formData.append("description",data.description);
    formData.append("price",Number(data.price));
    formData.append("category",data.category);
    formData.append("image",image);

    const response = await axios.post(`${url}/api/food/add`,formData);
    if(response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad"
      });
      setImage(false);
      toast.success(response.data.message)
    }else{
      toast.error(response.data.message)
    }
  }


  return (
    <div className='pt-5 px-8 text-slate-600 font-medium bg-slate-50 col-span-4'>
      <form onSubmit={onSubmitHandler} className='w-auto mb-16'>

        <div className='flex flex-col gap-3'>
          <div className='bg-white rounded-lg shadow-lg flex flex-col p-4'>
            <p className='mb-2'>Upload Image</p>
            <label htmlFor='image'>
              <img src={image? URL.createObjectURL(image) : assets.upload_area} alt="upload" />
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' hidden required />
          </div>

          <div className='bg-white rounded-lg shadow-lg flex flex-col p-4'>
            <p className='mb-2'>Product name</p>
            <input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder='Type here' required />
          </div>

          <div className='bg-white rounded-lg shadow-lg flex flex-col p-4'>
            <p className='mb-2'>Product description</p>
            <textarea onChange={onChangeHandler} value={data.description} name='description' rows={'6'} placeholder='Add description here' required />
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
            <div className='bg-white rounded-lg shadow-lg flex flex-col p-4'>
              <p className='mb-2'>Product category</p>
              <select onChange={onChangeHandler} value={data.category} name='category'>
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Deserts">Deserts</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
              </select>
            </div>

            <div className='bg-white rounded-lg shadow-lg flex flex-col p-4'>
              <p className='mb-2'>Product Price</p>
              <input onChange={onChangeHandler} value={data.price} type='Number' name='price' placeholder='In Rupees' required />
            </div>
          </div>
        </div>

        <button className='bg-purple-500 rounded-lg shadow-lg flex flex-col px-6 py-3 mt-4 text-white' type='submit' >ADD</button>
      </form>
    </div>
  )
}

export default Add