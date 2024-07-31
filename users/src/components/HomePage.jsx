import React from "react";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import BannerSlider from "./BannerSlider";
import CardHome from "./CardHome";
import DealsHeader from "./DealsHeader";
import SalesAdOfferHomepage from "./SalesAdOfferHomepage";

import Testimonials from "./Testimonials";

const HomePage = () => (
  <div className="w-full">
    <Navbar />
    <div className="lg:block md:block hidden">
      <Navbar2 />
    </div>
    <BannerSlider />
    <CardHome />
    <DealsHeader/>
    <SalesAdOfferHomepage/>
    <Testimonials/>
  </div>
);

export default HomePage;
