import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 text-white">
            <h5 className="text-uppercase font-bow">Redux store</h5>
            <p className="text-white    ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              asperiores, porro repellat excepturi illum officia vitae earum
              dolore commodi quis?
            </p>
          </div>
          <div className=" col-6 col-md-2">
            <h5 className="text-white text-uppercase">Useful Links</h5>
            <ul className="ps-0">
              <li className="text-white">
                <Link
                  to="/"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Home
                </Link>
              </li>
              <li className="ps-0 text-white">
                <Link
                  to="/cart"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2">
            <h5 className="text-white text-uppercase">Useful Links</h5>
            <ul className="ps-0">
              <li className="text-white">
                <Link
                  to="/"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Home
                </Link>
              </li>
              <li className="ps-0 text-white">
                <Link
                  to="/cart"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 text-white">
            <h5 className="text-uppercase">Follow</h5>
            <ul className="ps-0 d-flex social_icons">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
