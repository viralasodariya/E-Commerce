import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Shopcontext } from "../context/shopcontext";
import Breadcrums from "../componets/Breadcrums/Breadcrums";
import Productdisplay from "../componets/productdisplay/Productdisplay";
import Description from "../componets/descriptionbox/Description";
import Reletedproduct from "../componets/Relatedproduct/Reletedproduct";

const Product = () => {
  const { all_products } = useContext(Shopcontext);
  const { PorductId } = useParams();
  const product = all_products.find((e) => e.id === Number(PorductId));
  return (
    <div className="products">
      <Breadcrums product={product} />
      <Productdisplay product={product} />
      <Description />
      <Reletedproduct />
    </div>
  );
};

export default Product;
