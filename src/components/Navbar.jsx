import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import logo from "../../public/img/redux.svg";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top shadow-sm ">
      <div className="container py-1 text-center">
        <Link className="navbar-brand" to="/">
          <div className="d-flex align-items-center">
            <img src={"img/redux.svg"} alt="logo" height={"50px"} />
            <h6 className="fw-bold font-bow" style={{ color: "#764abc" }}>
              REDUX <br />
              STORE
            </h6>
          </div>
        </Link>
        <div className="cart ms-auto d-block d-md-none">
          <Link to="/cart" style={{ color: "inherit", textDecoration: "none" }}>
            <h6>
              <i className="bi bi-bag fs-3">
                <span className="cart_count relative">{cart.length}</span>
              </i>
            </h6>
          </Link>
        </div>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-4">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="cart d-none d-md-block">
            <Link
              to="/cart"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <h6>
                <i className="bi bi-bag fs-3">
                  <span className="cart_count relative">{cart.length}</span>
                </i>
              </h6>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
