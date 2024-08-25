import React from "react";
import "./offer.css";
import exclusive from "../Assets/exclusive_image.png";

const Offer = () => {
  return (
    <div className="offer">
      <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>Only On Best Sellers Product</p>
        <button>Check now</button>
      </div>
      <div className="offer-right">
        <img src={exclusive} alt="" />
      </div>
    </div>
  );
};

export default Offer;
