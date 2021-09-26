import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

export default function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();
  const addToCart = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

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
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}
