import React from "react";

const CartItem = ({ title, image_url }) => {
  console.log(title, image_url);
  return (
    <>
      <div className="item">
        <div className="item-title">
          <h2>{title}</h2>
        </div>
        <div className="item-cover">
          <img src={image_url} alt="#" />
        </div>
      </div>
    </>
  );
};

export default CartItem;
