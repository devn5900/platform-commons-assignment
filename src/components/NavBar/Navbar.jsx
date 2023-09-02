import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {BsBasket} from 'react-icons/bs'
const Navbar = () => {
  const {cart} = useSelector(store=>store.cartReducer);
  return (
    <div className='py-7 flex justify-between items-center w-[80%] m-auto'>
    <div>
      <h1 className='text-4xl font-extrabold '>
      <Link to="/" className=' hover:text-gray-500'>
      Platform Commons Store</Link>
      </h1>
    </div>
    <div className='flex justify-between items-center gap-10'>
    <div >
        <Link to="/" className='text-xl hover:text-gray-500'>Products</Link>
      </div>
        <div className='relative'>
        <Link to="/cart"><BsBasket className='text-2xl hover:text-gray-500'/></Link>
        <span className='absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center text-white bg-green-600 rounded-full text-sm'>{cart.length}</span>
        </div>
    </div>
    </div>
  )
}

export default Navbar