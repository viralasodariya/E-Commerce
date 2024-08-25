import React from "react";
import Hero from "../componets/Hero/Hero";
import Popular from "../componets/popular/popular";
import Offer from "../componets/offer/offer";
import Newcollection from "../componets/newcollection/newcollection";
import Newsletter from "../componets/newsletter/newsletter";
import Footers from "../componets/footer/Footer";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <Newcollection />
      <Newsletter />
    </div>
  );
};

export default Shop;
