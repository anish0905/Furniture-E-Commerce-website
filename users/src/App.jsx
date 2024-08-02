import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";

function App() {
  return (
    <div>
      <Navbar />
      <div className="lg:block md:block hidden">
      <Navbar2 />
    </div>
      <Outlet />
    </div>
  );
}

export default App;
