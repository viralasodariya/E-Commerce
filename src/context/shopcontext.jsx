import React, { createContext, useState } from "react";
import all_products from "../componets/Assets/all_product";

export const Shopcontext = createContext(null);

const getDefaultcart = () => {
  let cart = {};
  for (let i = 0; i < all_products.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

const Shopcontextprovider = (props) => {
  const [cartItems, setcartitems] = useState(getDefaultcart());
  //

  const addtocart = (itemId) => {
    setcartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(itemId); //show the item id
    console.log(cartItems);
  };
  const removetocart = (itemId) => {
    setcartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartvalue = () => {
    let totalamount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find(
          (product) => product.id === Number(item)
        );

        totalamount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalamount;
  };

  const getTotalCartItems = () => {
    let totalitem = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        totalitem += cartItems[item];
      }
    }
    return totalitem;
  };

  const contextvalue = {
    all_products,
    cartItems,
    addtocart,
    removetocart,
    getTotalCartvalue,
    getTotalCartItems,
  };

  return (
    <Shopcontext.Provider value={contextvalue}>
      {props.children}
    </Shopcontext.Provider>
  );
};

export default Shopcontextprovider;
