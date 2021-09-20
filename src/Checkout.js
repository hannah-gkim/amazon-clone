import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
// import { useStateValue } from "./StateProvider";
// import CheckoutProduct from "./CheckoutProduct";

export default function Checkout() {
  return (
    <div className="checkout">
      {/* left */}
      <div className="checkout__left">
        <img alt="" className="checkout__ad" src="/img/amazon_ad.png" />

        <div>
          {/* <h3>Hello, {user?.email}</h3> */}
          <h2 className="checkout__title">Shopping Cart</h2>
          {/* item1 */}
          {/* {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))} */}
        </div>
      </div>
      {/* right */}
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}
