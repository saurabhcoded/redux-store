import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SingleProduct from "./SingleProduct";

const ProductContainer = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response);
      } catch (error) {
        console.error(error);
      }
    }
    getProducts();
  }, []);
  if (products) {
    return (
      <div className="py-3">
        <h5 className="text-secondary fw-bold">OUR PRODUCTS</h5>
        <div className="row align-items-start mt-1 g-3">
          {products.data.map((ele) => {
            return <SingleProduct product={ele} />;
          })}
        </div>
      </div>
    );
  } else {
    return <div className="conatiner">loading..</div>;
  }
};

export default ProductContainer;
