import { toast } from "react-hot-toast";
import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
const CartItem = (props) => {
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(remove(id));
    toast.error("Item removed from cart");
  };
  const cartitem = props.cartitem;
  return (
    <div className="col-12">
      <div className="bg-white shadow p-3 rounded-3 d-flex align-items-center justify-content-between">
        <img
          src={cartitem.image}
          alt="bag text"
          className=""
          style={{ width: "80px", height: "80px", objectFit: "contain" }}
        />
        <h6 className="m-2">{cartitem.title.slice(0, 20)}</h6>
        <h6>{cartitem.price}&nbsp;$</h6>
        <button
          className="btn btn-danger text-white btn-sm m-2"
          onClick={() => handleRemove(cartitem.id)}
        >
          <small>remove</small>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
