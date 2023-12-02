import React from "react";
import Navbar from "../components/navbar";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <>
      <Navbar />
      {cartItems.length > 1 ? (
        <h1>Cart Items- {cartItems.length}</h1>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
      <div className="item-container">
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
    </>
  );
};

export default Cart;
