import React from "react";
import "./Footer.css";
import Footer from "../Assets/logo_big.png";
import Insta from "../Assets/instagram_icon.png";
import pintester from "../Assets/pintester_icon.png";
import Whatsapp from "../Assets/whatsapp_icon.png";

const Footers = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={Footer} alt="" />
        <p>SHOPPER</p>
        <ul className="footer_links">
          <li>Company</li>
          <li>products</li>
          <li>office</li>
          <li>About</li>
          <li>contact</li>
        </ul>
        <div className="footer-social-icon">
          <div className="footer-icons-containor">
            <img src={Insta} alt="" />
          </div>
          <div className="footer-icons-containor">
            <img src={pintester} alt="" />
          </div>
          <div className="footer-icons-containor">
            <img src={Whatsapp} alt="" />
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copy Right At 2024 - All Right Reserved </p>
      </div>
    </div>
  );
};

export default Footers;
