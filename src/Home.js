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
        <Product
          id="1234567"
          title="Battery Case for iPhone 11, Swaller 5000mAh Portable Charging Case"
          price={34.59}
          image="https://m.media-amazon.com/images/I/41hFrv1jZCL._AC_SR250,230_.jpg"
          rating={5}
        />
        <Product
          id="1234567"
          title="Vital Proteins Collagen Peptides Powder"
          price={29.99}
          image="https://m.media-amazon.com/images/I/81KeiYqPR4L._AC_SL1500_.jpg"
          rating={4}
        />
        <Product
          id="1234567"
          title="50 Pcs Disposable Face Cover 3-Ply Filter Non Medical Breathable Earloop Masks (Pink)"
          price={10.99}
          image="https://m.media-amazon.com/images/I/61qjqJdpf-L._AC_SL1200_.jpg"
          rating={4}
        />
      </div>
      {/* Home Row 2 */}
      <div className="home__row">
        <Product
          id="1234567"
          title="Pancake Pan Nonstick - Pancake Griddle Pan- Pancake Mold for Kids"
          price={35.99}
          image="https://m.media-amazon.com/images/I/71-qcpkPVrL._AC_SL1500_.jpg"
          rating={4}
        />
        <Product
          id="1234567"
          title="Veramz Laptop Desk for Bed, Laptop Bed Tray Table, Notebook Standing with Foldable Legs"
          price={37.99}
          image="https://m.media-amazon.com/images/I/61XcpAL1jfL._AC_SL1500_.jpg"
          rating={4}
        />
      </div>
      {/* Home Row 3 */}
      <div className="home__row">
        <Product
          id="1234567"
          title="
        GOLDEN BEACH Velvet Dinning Chair Set of 2 Mid-Back Accent Chair Modern Leisure Armchair"
          price={239.99}
          image="https://m.media-amazon.com/images/I/51YwOHqMExL._AC_SL1100_.jpg"
          rating={5}
        />
        <Product
          id="1234567"
          title="[rom&nd] Zero Velvet Tint 17Colors | Velvet matte, Long-lasting, Lip Tint for Daily Use, K-beauty"
          price={22.0}
          image="https://m.media-amazon.com/images/I/61zp1Z3l41L._SL1200_.jpg"
          rating={4}
        />
        <Product
          id="1234567"
          title="Osmo - Coding Starter Kit for iPad - 3 Educational Learning Games - Ages 5-10+ - STEM Toy"
          price={91.05}
          image="https://m.media-amazon.com/images/I/81Jbw2+cJhL._AC_SL1500_.jpg"
          rating={5}
        />
      </div>

      {/* Home Row 4 */}
      {/* Home Row 5 */}
      {/* Home Row 6 */}
    </div>
  );
}
