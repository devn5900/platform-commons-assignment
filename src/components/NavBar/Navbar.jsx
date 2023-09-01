import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const {cart} = useSelector(store=>store.cartReducer);
  return (
    <div className='p-3 flex justify-evenly'>
        <Link to="/">Catalog</Link>
        <Link to="/cart">Cart{cart.length}</Link>
    </div>
  )
}

export default Navbar