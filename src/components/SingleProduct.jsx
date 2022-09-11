import React from "react";

const SingleProduct = (props) => {
  const { id, title, description, image, price, rating } = props.product;
  return (
    <div className="col-6 col-md-3 col-lg-2 " key={id}>
      <div
        className="bg-white shadow p-3 rounded-3 d-flex flex-column justify-content-between"
        style={{ minHeight: "380px" }}
      >
        <div>
          <img
            src={image}
            alt="bag text"
            className="d-block mx-auto"
            style={{ width: "80%", height: "150px", objectFit: "contain" }}
          />
          <div className="mt-3">
            <h6>{title.slice(0, 20) + "..."}</h6>
            <div>
              <small>
                {rating.rate} <i class="bi bi-star-half text-warning"></i>
              </small>
              (<small>{rating.count}</small>)
            </div>
            <p
              className="text-secondary"
              style={{ wordWrap: "break-word", fontSize: "14px" }}
            >
              <small>{description.slice(0, 25) + "..."}</small>
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <h6>
            <small>{price}$</small>
          </h6>
          <button className="btn btn-success   text-white btn-sm px-2">
            <small>add&nbsp;cart</small>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
