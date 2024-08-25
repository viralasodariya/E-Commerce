import React from "react";
import "./description.css";

const Description = () => {
  return (
    <div className="descriptionbox">
      <div className="descritonbox-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Welcome to our online shopping destination! Discover a vast selection
          of products from top brands, curated to suit every style and need.
          Enjoy seamless browsing, secure transactions, and doorstep delivery
          for a hassle-free shopping experience.
        </p>
        <p>
          Experience convenience like never before with our e-commerce platform.
          Browse, shop, and save on a wide array of products, all from the
          comfort of your home. Join our community of savvy shoppers and unlock
          endless possibilities with just a click
        </p>
      </div>
    </div>
  );
};

export default Description;
