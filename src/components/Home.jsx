import React, { useEffect } from "react";
import { getProdctsApi } from "../redux/products/action";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Products/Product";
import { replaceProdFromCart } from "../utills/matcher";

const Home = () => {
  const dispatch = useDispatch();
  const {cart}= useSelector(store=>store.cartReducer);
  const { data } = useSelector((store) => store.productReducer);
  const products= replaceProdFromCart(data,cart);
  useEffect(() => {
    dispatch(getProdctsApi());
  }, []);
  return (
    <div className="bg-gray-200 p-4">
      <div className="w-[90%] m-auto ">
        <div className="grid grid-cols-4 gap-3 ">
          {products &&
            products.length > 0 &&
            products?.map((el) => {
              return <Product key={el.id} {...el} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
