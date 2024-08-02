import React from "react";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import BannerSlider from "./BannerSlider";
import CardHome from "./CardHome";
import DealsHeader from "./DealsHeader";
// import SalesAdOfferHomepage from "./SalesAdOfferHomepage";
import ServiceCard from "./ServiceCard";

import Testimonials from "./Testimonials";
import OfferSales from "./OfferSales";
import ProductDescription from "./ProductDescription";
import { Cateroy } from "./Cateroy";
import CustomizedCurtains from "./CustomizedCurtains";
import Blinds from "./Blinds";
import WallPaper from "./WallPaper";

const HomePage = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="lg:block md:block hidden">
        <Navbar2 />
      </div>
      <BannerSlider />
      <CardHome />
      <ProductDescription />
      <Cateroy />
      <ServiceCard />
      <CustomizedCurtains />
      <Blinds/>
      <WallPaper />
      <DealsHeader />
      <OfferSales />
      {/* <SalesAdOfferHomepage /> */}
      <Testimonials />
    </div>
  );
};

export default HomePage;
