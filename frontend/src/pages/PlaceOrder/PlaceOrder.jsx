import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {
  const {getTotaCartAmount} =useContext(StoreContext)
  return (
    <form className='place order flex items-start justify-between gap-12 m-24'>
      
      <div className="place-order-left w-full ">
        <p className="tiitle text-3xl font-semibold mb-12">Delivery Information</p>
        <div className=" multifields   flex  gap-2 ">
          <input className='mb-4 w-full p-2 border border-black ' type="text" placeholder="First Name" />
          <input className='mb-4 w-full p-2 border border-black ' type="text" placeholder="Last Name" />
        </div>

       <input className='mb-4 w-full p-2 border border-black ' type="email" placeholder="Email address"  />
       <input className='mb-4 w-full p-2 border border-black '  type="text" placeholder="Street" />
       <div className="multifields flex  gap-2">
          <input  className='mb-4 w-full p-2 border border-black ' type="text" placeholder="City" />
          <input className='mb-4 w-full p-2 border border-black '  type="text" placeholder="State" />
        </div>

        <div className="multifields flex  gap-2 ">
          <input  className='mb-4 w-full p-2 border border-black '  type="text" placeholder="Zip Code" />
          <input  className='mb-4 w-full p-2 border border-black '  type="text" placeholder="Country" />
        </div>
        <input  className='mb-4 w-full p-2 border border-black '  type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right w-full ">


      <div className="cart-total flex-1 flex-col  ">
          <h2 className="font-bold gap-4 mb-4 text-2xl" >Cart Totals</h2>
          <div>
            <div className="cart-total-details flex justify-between text-gray-700">
              <p>Subtotal</p>
              <p>{ getTotaCartAmount()===0?0:getTotaCartAmount()+2}</p>
            </div>
            <hr className="" />
            <div className="cart-total-details flex justify-between text-gray-700">
              <p>Delivery Fee</p>
              <p>{getTotaCartAmount()===0?0:2}</p>
            </div>
            <hr className=""/>
            <div className="cart-total-details flex justify-between text-gray-700 ">
              <b  >Total</b>
              <b>{0}</b>
              </div>
              
          </div>
          <button   className="border-none  text-white bg-red-500 w-96 border-r-4 mt-7">PROCEED TO PAYEMENT</button>
        </div>


      </div>
      
    </form>
  )
}

export default PlaceOrder
