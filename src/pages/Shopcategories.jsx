import React, { useContext } from "react";
import "./css/shopcategorie.css";
import { Shopcontext } from "../context/shopcontext";
import dropdown_icon from "../componets/Assets/dropdown_icon.png";
import Item from "../componets/items/item";

const Shopcategories = (props) => {
  const { all_products } = useContext(Shopcontext);
  return (
    <div className="shop-category">
      <img className="shop-category-banner" src={props.banner} alt="" />
      <div className="shop-category-indexsort">
        <p>
          <span>Showing 1-12</span>out of 36 all_products
        </p>
        <div className="shopcategorie-sort">
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_products.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore more</div>
    </div>
  );
};

export default Shopcategories;
