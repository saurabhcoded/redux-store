import React from "react";
import CartContainer from "../components/CartContainer";

const Cart = () => {
  return (
    <div>
      <div className="container bg-white">
        <h4>
          Cart <span className="cart_count">3</span>
        </h4>
        <CartContainer />
      </div>
    </div>
  );
};

export default Cart;
