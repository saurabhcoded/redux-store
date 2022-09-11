import React from "react";

const CartItem = () => {
  return (
    <div className="col-12">
      <div className="bg-white shadow p-3 rounded-3 d-flex align-items-center justify-content-between">
        <img
          src="img/bag.jpg"
          alt="bag text"
          className=""
          style={{ width: "80px", height: "80px", objectFit: "cover" }}
        />
        <h6 className="m-2">Bagpack</h6>
        <h6>80$</h6>
        <button className="btn btn-danger text-white btn-sm m-2">
          <small>remove</small>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
