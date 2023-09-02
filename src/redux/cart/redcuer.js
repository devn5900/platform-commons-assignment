import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  PLACE_ORDER,
  REMOVE_FROM_CART,
} from "./action";

const init = {
  cart: [],
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    case REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter((el) => el.id != payload) };
    case INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((el) => {
          if (el.id == payload) {
            el.quantity += 1;
          }
          return el;
        }),
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.filter((el) => {
            let rm=el;
            if(el.id==payload){
                if(rm.quantity<=1){
                    rm=null;
                }else{
                    rm.quantity-=1;
                }
            }
            return rm;
        })||[],
      };
      case PLACE_ORDER:
        return init;
    default:
      return state;
  }
};
