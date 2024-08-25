import React, { useContext } from "react";
import "./productdisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { Shopcontext } from "../../context/shopcontext";

const Productdisplay = ({ product }) => {
  const { addtocart } = useContext(Shopcontext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img src={product.image} alt="" className="productdisplay-main-img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-prices-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-prices-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Stay effortlessly stylish with our premium cotton t-shirt. Crafted for
          comfort, its relaxed fit and timeless design make it a wardrobe
          essential. Choose from a range of vibrant colors to elevate your
          everyday look.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addtocart(product.id);
          }}
        >
          Add To Cart
        </button>
        <p className="productdisplay-right-categoryt">
          <span>Categroy:</span>Women,Tshirt,crop top
        </p>
        <p className="productdisplay-right-categoryt">
          <span>Tags:</span>Moder ,latest
        </p>
      </div>
    </div>
  );
};

export default Productdisplay;
