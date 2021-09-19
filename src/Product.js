import React from "react";
import "./Product.css";

export default function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      {/* info */}
      <div className="product__info">
        {/* product name */}
        <p>{title}</p>
        {/* price */}
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        {/* rating */}
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      {/* image */}
      <img className="" alt="" src={image} />
      {/* Add to cart Button */}
      <button className="">Add to Cart</button>
    </div>
  );
}
