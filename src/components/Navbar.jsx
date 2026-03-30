import { useState } from "react";
import cartIcon from "../assets/shopping-cart.png";

const Navbar = ({ cartCount = 0 }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

        <a href="/" className="text-2xl font-extrabold text-purple-600 tracking-tight">
          DigiTools
        </a>

        {/* Nav items */}
        <ul className="hidden md:flex items-center gap-8 text-[#101727] font-medium text-md">
          <li><a href="#" className="hover:text-purple-600 transition-colors">Products</a></li>
          <li><a href="#" className="hover:text-purple-600 transition-colors">Features</a></li>
          <li><a href="#" className="hover:text-purple-600 transition-colors">Pricing</a></li>
          <li><a href="#" className="hover:text-purple-600 transition-colors">Testimonials</a></li>
          <li><a href="#" className="hover:text-purple-600 transition-colors">FAQ</a></li>
        </ul>

       
        <div className="hidden md:flex items-center gap-5">
          <div className="relative cursor-pointer group">
            <img src={cartIcon} alt="Cart" className="w-5 h-5 group-hover:brightness-0 transition-all duration-200" />
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

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen
            ? <i className="fa-solid fa-xmark"></i>
            : <i className="fa-solid fa-bars"></i>
          }
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-gray-700 font-medium text-sm">
          <a href="#" className="hover:text-purple-600">Products</a>
          <a href="#" className="hover:text-purple-600">Features</a>
          <a href="#" className="hover:text-purple-600">Pricing</a>
          <a href="#" className="hover:text-purple-600">Testimonials</a>
          <a href="#" className="hover:text-purple-600">FAQ</a>
          <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
            <button className="text-gray-700 hover:text-purple-600">Login</button>
            <button className="bg-purple-600 text-white font-semibold px-5 py-2 rounded-full">
              Get Started
            </button>
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;