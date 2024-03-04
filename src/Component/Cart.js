import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ListMenu from "./ListMenu";
import { claerItem, removeItem } from "../utiles/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  console.log("cartItem", cartItem);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(claerItem());
  };
  const handleRemoveOne = () => {
    dispatch(removeItem());
  };
  return (
    <div className="text-center m-5 p-5 ">
      <div className="text-2xl font-bold">Cart</div>
      <div className="w-6/12 m-auto">
        <button
          onClick={handleClearCart}
          className="bg-black text-white rounded-lg p-2"
        >
          Clear Cart
        </button>
        <br />
        <button
          onClick={handleRemoveOne}
          className="bg-yellow-400 rounded-lg p-2 my-2"
        >
          Remove One
        </button>
        <br />
        <div>
          {cartItem.length === 0 ? (
            <h2 className="text-2xl font-bold">Cart is empty Add something</h2>
          ) : (
            <ListMenu items={cartItem} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
