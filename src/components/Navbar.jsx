import { useState } from "react";
import cartIcon from "../assets/shopping-cart.png";

const Navbar = ({ cartCount = 0 }) => {
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-5xl  mx-auto px-6 py-4 flex items-center justify-between">

        <a href="/" className="text-2xl font-extrabold text-purple-600 tracking-tight">
          DigiTools
        </a>

        <ul className="hidden md:flex items-center gap-8 text-[#101727] font-medium text-md">
          <li><a href="#" className="hover:text-purple-600 transition-colors">Products</a></li>
          <li><a href="#" className="hover:text-purple-600 transition-colors">Features</a></li>
          <li><a href="#" className="hover:text-purple-600 transition-colors">Pricing</a></li>
          <li><a href="#" className="hover:text-purple-600 transition-colors">Testimonials</a></li>
          <li><a href="#" className="hover:text-purple-600 transition-colors">FAQ</a></li>
        </ul>

        <div className="flex items-center gap-5">
          <div className="relative cursor-pointer">
            <img src={cartIcon} alt="Cart" className=" w-5 h-5 hover:brightness-0 transition-opacity"/>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          <button className="text-[#101727] font-semibold text-md hover:text-purple-600 transition-colors">
            Login
          </button>

          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors">
            Get Started
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;