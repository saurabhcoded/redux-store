import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartContainer = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="py-3">
      <h4>
        Cart <span className="cart_count">{cart.length}</span>
      </h4>
      <div className="row align-items-start mt-1 g-3">
        {cart.map((ele) => {
          return <CartItem cartitem={ele} key={ele.id} />;
        })}
      </div>
    </div>
  );
};

export default CartContainer;
