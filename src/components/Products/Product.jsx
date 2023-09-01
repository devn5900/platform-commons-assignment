import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, decreaeQuantity, increaeQuantity, removeFromCart } from '../../redux/cart/action';

const Product = ({name,id,image,weight,price,quantity,c}) => {
    const dispatch= useDispatch();
    const sendToCart=()=>{
        const data= {id,name,image,weight,price,quantity:1}
        dispatch(addToCart(data))
    }
    const increaseQuantityInCart=()=>{
        dispatch(increaeQuantity(id));
    }
    const decreaseQuantityInCart=()=>{
        dispatch(decreaeQuantity(id));
    }
    const removeCartItem=()=>{
        dispatch(removeFromCart(id));
    }
  return (
    <div className='bg-white p-2 flex flex-col gap-3'>
        <img className=' aspect-square w-full' src={image} alt={name} />
        <h1 className='text-lg font-bold '>{name.split(" ").splice(0,4).join(" ")}</h1>
        <h2>Price: ${price}</h2>
        {quantity&&<h2>Payable: ${Number(price)*quantity}</h2>}
        <h2>Weight: {weight}</h2>
        {!quantity&&<button className='p-2 bg-blue-600 text-white rounded-md cursor-pointer' onClick={sendToCart}>Add To Cart</button>}
       {quantity&&<div className='flex gap-3 items-center justify-center'>
            <button onClick={decreaseQuantityInCart} className='px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer'>-</button>
            <span className='text-lg text-gray-800'>{quantity}</span>
            <button onClick={increaseQuantityInCart} className='px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer'>+</button>
        </div>}
        {c&&<button className='p-2 bg-blue-600 text-white rounded-md cursor-pointer' onClick={removeCartItem}>Remove</button>}
    </div>
  )
}

export default Product