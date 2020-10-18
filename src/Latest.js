import React from "react";
import "./Latest.css";
import pImage1 from "./assets/img/categori/product1.png";
import pImage2 from "./assets/img/categori/product2.png";
import pImage3 from "./assets/img/categori/product3.png";
import pImage4 from "./assets/img/categori/product4.png";
import pImage5 from "./assets/img/categori/product5.png";
import pImage6 from "./assets/img/categori/product6.png";

function Latest() {
  return (
    <div className="latest">
      <div className="latest__header">
        <h1>Latest Products</h1>
        <div className="latest__headerType">
          <p>All</p>
          <p>New</p>
          <p>Featured</p>
          <p>Offer</p>
        </div>
      </div>
      <div className="latest__products">
        <img src={pImage1} alt="" />
        <img src={pImage2} alt="" />
        <img src={pImage3} alt="" />
        <img src={pImage4} alt="" />
        <img src={pImage5} alt="" />
        <img src={pImage6} alt="" />
      </div>
    </div>
  );
}

export default Latest;
