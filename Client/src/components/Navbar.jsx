import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  return (
    <nav className="bg-slate-400 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span>HomeLine Logo</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="search"
              placeholder="Search the product"
              className="border rounded-md p-2"
            />
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <AccountCircleIcon className="text-4xl" />
            <span className="text-xl">Login</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <ShoppingCartIcon className="text-4xl" />
            <span className="text-xl">Cart</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
