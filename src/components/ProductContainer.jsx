import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, STATUSES } from "../store/productSlice";
import SingleProduct from "./SingleProduct";

const ProductContainer = () => {
  // const [products, setProducts] = useState(null);
  const products = useSelector((state) => state.product.data);
  const status = useSelector((state) => state.product.status);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
    // async function getProducts() {
    //   try {
    //     const response = await axios.get("https://fakestoreapi.com/products");
    //     setProducts(response);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
    // getProducts();
  }, []);
  if (status == STATUSES.LOADING) {
    return (
      <div className="continer text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else if (status == STATUSES.IDLE) {
    return (
      <div className="py-3">
        <h5 className="text-secondary fw-bold">OUR PRODUCTS</h5>
        <div className="row align-items-start mt-1 g-1 g-sm-3">
          {products.map((ele) => {
            return <SingleProduct product={ele} key={ele.id} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="continer text-center py-5 text-center">
        <div class="alert alert-danger" role="alert">
          OOps! something went wrong <br />
          Try reloading
        </div>
      </div>
    );
  }
};

export default ProductContainer;
