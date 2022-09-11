import React from "react";
import { Link } from "react-router-dom";
// import logo from "../../public/img/redux.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top shadow-sm ">
      <div className="container py-1 text-center">
        <Link className="navbar-brand" to="#">
          <div className="d-flex align-items-center">
            <img src={"img/redux.svg"} alt="logo" height={"50px"} />
            <h6 className="fw-bold font-bow" style={{ color: "#764abc" }}>
              REDUX <br />
              STORE
            </h6>
          </div>
        </Link>
        <button
          className="navbar-toggler"
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
          <div className="cart">
            <Link
              to="/cart"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <h6>
                <i className="bi bi-bag fs-3">
                  <span className="cart_count relative">3</span>
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
