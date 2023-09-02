import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../Products/Product';
import { calculateTotalPrice } from '../../utills/matcher';
import { Link } from 'react-router-dom';

const Carts = () => {
  const {cart}= useSelector(store=>store.cartReducer);
  const totalPrice= calculateTotalPrice(cart);
  return (
    <div className="bg-gray-200 p-4">
    <div className='w-[90%] m-auto'>

    <div className=' flex flex-col'>
        {cart&& cart.length>0&&
      <div className=' flex items-center gap-8 py-8 float-right'>
        <div>
        <h1 className='text-xl  '>Total Price: <span className=' font-bold'>${totalPrice}</span></h1>
        <p>Estimated delivery date: <span className=' font-semibold'>{`${new Date().getDate()+5}-${new Date().getMonth()}-${new Date().getFullYear()}`}</span></p>
          </div>
        <Link className='bg-blue-700 text-white font-semibold hover:bg-blue-600 p-2 rounded-lg flex items-center justify-center' to={'/confirmorder'} >Confirm Order</Link>
      </div>
        }
      {cart&&cart.length>0?<div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-col-1 gap-4'>
        {
          cart&&cart.length>0&&cart.map((el)=>{
            return <Product key={el.id} {...el} c={true} />
          })
        }
      </div>:<div className='w-full h-[83vh] flex items-center justify-center'>
      <h1 className='text-center text-5xl font-extrabold text-gray-500'>No product added</h1>
      </div>}

    </div>
    </div>
    </div>
  )
}

export default Carts