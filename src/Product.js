import React from "react";
import "./Product.css";

export default function Product() {
  return (
    <div className="product">
      {/* info */}
      <div className="product__info">
        {/* product name */}
        <p>The lean startup</p>
        {/* price */}
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        {/* rating */}
        <div className="product__rating">
          <p>⭐️</p>
        </div>
      </div>
      {/* image */}
      <img
        className=""
        alt=""
        src="https://m.media-amazon.com/images/I/41hFrv1jZCL._AC_SR250,230_.jpg"
      />
      {/* Add to cart Button */}
      <button className="">Add to Cart</button>
    </div>
  );
}
