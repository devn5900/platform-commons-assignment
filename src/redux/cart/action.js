export const ADD_TO_CART='add/to/cart';
export const REMOVE_FROM_CART='remove/from/cart';
export const INCREASE_QUANTITY='increase/quantity'
export const DECREASE_QUANTITY='decrease/quantity'


export const addToCart=(data)=>async(dispatch)=>{
    dispatch({type:ADD_TO_CART,payload:data})
}

export const increaeQuantity=(id)=>async(dispatch)=>{
    dispatch({type:INCREASE_QUANTITY,payload:id})
}
export const decreaeQuantity=(id)=>async(dispatch)=>{
    dispatch({type:DECREASE_QUANTITY,payload:id})
}

export const removeFromCart=(id)=>async(dispatch)=>{
    dispatch({type:REMOVE_FROM_CART,payload:id})
}