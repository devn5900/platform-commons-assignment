import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotalPrice } from '../../utills/matcher';
import { useNavigate } from 'react-router-dom';
import { placeOrder } from '../../redux/cart/action';

const ConfirmOrder = () => {
    const navigate= useNavigate();
    const dispatch= useDispatch();
    const {cart}= useSelector(store=>store.cartReducer);
  const totalPrice= calculateTotalPrice(cart);

  const getPlacedOrder=()=>{
    dispatch(placeOrder());
    navigate("/")
  }
  return (
    <div  className='py-6'>
        
<div className="w-[40%] m-auto max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8  ">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 ">Confirm Orders</h5>
        
   </div>
   <div >
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
           {
            cart&&cart.length>0&&cart.map((el)=>{
                return  <li key={el.id} className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-16 h-16 rounded-full" src={el.image} alt={el.name} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate ">
                            {el.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            Weight: {el.weight}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                        ${Number(el.price)*el.quantity}
                    </div>
                </div>
            </li>
            })
           }
           
        </ul>
   </div>
   <div className=' text-center'>
   <button onClick={getPlacedOrder} type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Place Order {`( $${totalPrice} )`}</button>
   </div>
</div>

    </div>
  )
}

export default ConfirmOrder