import React from "react";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import BannerSlider from "./BannerSlider";
import CardHome from "./CardHome";
import SalesAdOffer from "./SalesAdOffer";
import interior3 from '../assets/image/interior3.jpeg'; 
import interior2 from '../assets/image/interior2.jpeg'; 
import DealsHeader from "./DealsHeader";

const HomePage = () => (
  <div>
    <Navbar />
    <Navbar2 />
    <BannerSlider />
    <CardHome />
    <DealsHeader/>
    <div className="flex">
      <SalesAdOffer
        img={interior3}
        title="Big Sale on All Items!"
        des="Get up to 50% off on selected items. Limited time offer, so hurry up!"
        offer="30% OFF"
        price="$150" />
      <SalesAdOffer
        img={interior2}
        title="Big Sale on All Items!"
        des="Get up to 50% off on selected items. Limited time offer, so hurry up!"
        offer="80% OFF"
        price="$1000" />
      <SalesAdOffer
        img={interior3}
        title="Big Sale on All Items!"
        des="Get up to 50% off on selected items. Limited time offer, so hurry up!"
        offer="60% OFF"
        price="$700" />

    </div>
  </div>
);

export default HomePage;
