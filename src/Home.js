import React from "react";
import "./Home.css";
import Product from "./Product";

export default function Home() {
  return (
    <div className="home">
      {/* Landing page */}
      <div className="home__container">
        <img className="home__image" alt="" src="/img/Amazon_landing.png" />
      </div>
      {/* Home Row 1 */}
      <div className="home__row">
        <Product />
        {/* <Product /> */}
        {/* product */}
      </div>
      {/* Home Row 2 */}
      <div className="home__row">
        {/* product */}
        {/* product */}
      </div>
      {/* Home Row 3 */}
      <div className="home__row">
        {/* product */}
        {/* product */}
        {/* product */}
      </div>

      {/* Home Row 4 */}
      {/* Home Row 5 */}
      {/* Home Row 6 */}
    </div>
  );
}
