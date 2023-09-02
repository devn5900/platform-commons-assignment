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
    <div className='bg-white p-3 flex flex-col gap-3 rounded-md'>
        <img className=' aspect-square w-full' src={image} alt={name} />
       <div className="px-6 flex flex-col gap-2" >
        <h1 className='text-2xl font-bold truncate'>{name}</h1>
          <div className='flex lg:text-sm md:text-xs justify-between'>
          <h2 className=' text-gray-500'> {weight}</h2>
            {quantity&&<h2 className=' font-bold'>Payable: ${(Number(price)*quantity).toFixed(2)}</h2>}
          </div>
            <div className=' flex lg:flex-row md:flex-col justify-between gap-2 items-center'>
                <h2 className='text-xl font-extrabold '> ${price}</h2>
                {!quantity&&<button className='p-2 font-semibold bg-blue-600 text-white rounded-md cursor-pointer' onClick={sendToCart}>Add To Cart</button>}
            {quantity&&<div className='flex gap-3 items-center justify-center'>
                    <button onClick={decreaseQuantityInCart} className='px-3 py-1 bg-blue-600 text-white rounded-md cursor-pointer'>-</button>
                    <span className='text-lg text-gray-800'>{quantity}</span>
                    <button onClick={increaseQuantityInCart} className='px-3 py-1 bg-blue-600 text-white rounded-md cursor-pointer'>+</button>
                </div>}
            </div>
            {c&&<button className='p-2 bg-blue-600 text-white rounded-md cursor-pointer' onClick={removeCartItem}>Remove</button>}
       </div>
    </div>
  )
}

export default Product