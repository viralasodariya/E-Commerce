import React, { useContext } from "react";
import "./cartitem.css";
import { Shopcontext } from "../../context/shopcontext";
import remove_icon from "../Assets/cart_cross_icon.png";

const Cartitem = () => {
  const { all_products, cartItems, removetocart, getTotalCartvalue } =
    useContext(Shopcontext);
  return (
    <div className="cartitems">
      <div className="cart-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>price</p>
        <p>Quantity</p>
        <p> Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cart-item-format cart-format-main">
                <img src={e.image} className="carticon-product-icon" alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cart-item-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="remove"
                  src={remove_icon}
                  onClick={() => {
                    removetocart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitem-down">
        <div className="cartitem-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitem-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartvalue()}</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <p>Shipping free</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartvalue()}</h3>
            </div>
          </div>
          <button>Proceed to Check out</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code ,Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Promo code " name="" id="" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
