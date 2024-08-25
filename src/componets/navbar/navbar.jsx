import React, { useContext, useState } from "react";
import "./navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { Shopcontext } from "../../context/shopcontext";

const Navbar = () => {
  const [menu, setmenu] = useState("shop");
  const { getTotalCartItems } = useContext(Shopcontext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="somthing miss" />
        <p>SHOPPER</p>
      </div>
      <ul className="menu-bar">
        <li
          onClick={() => {
            setmenu("shop");
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            shop{menu === "shop" ? <hr /> : <></>}
          </Link>
        </li>
        <li
          onClick={() => {
            setmenu("mens");
          }}
        >
          <Link to="/mens" style={{ textDecoration: "none" }}>
            men{menu === "mens" ? <hr /> : <></>}
          </Link>
        </li>
        <li
          onClick={() => {
            setmenu("womens");
          }}
        >
          <Link to="/womens" style={{ textDecoration: "none" }}>
            {" "}
            Women {menu === "womens" ? <hr /> : <></>}
          </Link>
        </li>
        <li
          onClick={() => {
            setmenu("kids");
          }}
        >
          <Link to="/kids" style={{ textDecoration: "none" }}>
            Kids {menu === "kids" ? <hr /> : <></>}
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="somthing miss" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
