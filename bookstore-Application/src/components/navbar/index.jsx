import React, { useState } from "react";
import "./styles.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import store from "../../utils/store";

function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="bootstore" />
      </div>
      <div className="links">
        <Link to="/" className={currentPath === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          to="/bookpage"
          className={currentPath === "/book" ? "active" : ""}
        >
          Books
        </Link>
        <Link
          to="/authorpage"
          className={currentPath === "/author" ? "active" : ""}
        >
          Authors
        </Link>
        <Link to="/cart" className={currentPath === "/cart" ? "active" : ""}>
          <div className="cart">
            <FaShoppingCart />
            <span>-{cartItems.length} items</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
