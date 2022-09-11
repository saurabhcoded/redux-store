import React from "react";
import CartItem from "./CartItem";

const CartContainer = () => {
  return (
    <div>
      <div className="py-3">
        <h5 className="text-secondary fw-bold">OUR PRODUCTS</h5>
        <div className="row align-items-start mt-1 g-3">
          <CartItem />
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
