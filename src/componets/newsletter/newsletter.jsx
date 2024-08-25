import React from "react";
import "./newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exculsive offer on your email</h1>
      <p>Subscribe to our newsletter and stay updates</p>
      <div>
        <input type="email" placeholder="Your email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
