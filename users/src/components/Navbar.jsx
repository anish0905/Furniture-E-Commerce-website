import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-100 p-4 lg:p-8 shadow-md w-full flex items-center justify-between gap-5 px-10">
      <div className="lg:text-2xl md:text-xl text-sm font-bold w-1/5">
        <span> Logo</span>
      </div>
      <div className="relative lg:w-1/2 w-full">
        <input
          type="search"
          placeholder="Search the product"
          className="border rounded-md p-2 w-full"
        />
      </div>
      <div className="flex items-center space-x-4 w-1/4 justify-end hidden sm:flex">
        <div className="flex items-center space-x-2 cursor-pointer">
          <AccountCircleIcon className="text-4xl" />
          <span className="text-xl">Login</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <ShoppingCartIcon className="text-4xl" />
          <span className="text-xl">Cart</span>
        </div>
      </div>
      <div className="flex sm:hidden">
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <CloseIcon className="text-3xl" />
          ) : (
            <MenuIcon className="text-3xl" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 right-0 bg-gray-100 shadow-md w-full sm:hidden z-30">
          <div className="flex flex-col items-center space-y-4 p-4">
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
      )}
    </nav>
  );
};

export default Navbar;
