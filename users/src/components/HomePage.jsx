import React from "react";

import BannerSlider from "./BannerSlider";
import CardHome from "./CardHome";
import DealsHeader from "./DealsHeader";
// import SalesAdOfferHomepage from "./SalesAdOfferHomepage";

import Testimonials from "./Testimonials";
import OfferSales from "./OfferSales";
import ProductDescription from "./ProductDescription";
import { Cateroy } from "./Cateroy";

const HomePage = () => (
  <div className="w-full">
    <BannerSlider />
    <CardHome />
    <ProductDescription/>
    <Cateroy/>
    <DealsHeader />
    <OfferSales />
    {/* <SalesAdOfferHomepage /> */}
    <Testimonials />
  </div>
);

export default HomePage;
