import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../Products/Product';
import { calculateTotalPrice } from '../../utills/matcher';
import { Link } from 'react-router-dom';

const Carts = () => {
  const {cart}= useSelector(store=>store.cartReducer);
  const totalPrice= calculateTotalPrice(cart);
  return (
    <div>
        {cart&& cart.length>0&&
      <div>
        <h1>Total Price: {totalPrice}</h1>
        <Link className='bg-blue-400' to={'/confirmorder'} >Confirm Order</Link>
      </div>
        }
      {cart&&cart.length>0?<div className='grid grid-cols-4'>
        {
          cart&&cart.length>0&&cart.map((el)=>{
            return <Product key={el.id} {...el} c={true} />
          })
        }
      </div>:<h1 className='text-center'>No product added</h1>}
    </div>
  )
}

export default Carts