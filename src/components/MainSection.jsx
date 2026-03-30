import { useState } from "react";
import products from "../data/products.json";
import ProductCard from "./ProductCard";
import { toast } from "react-toastify";

import writingIcon from "../assets/writing_2327400 1.png";
import designIcon from "../assets/design-tool.png";
import cameraIcon from "../assets/camera-tools.png";
import operationIcon from "../assets/operation.png";
import portfolioIcon from "../assets/portfolio.png";
import socialIcon from "../assets/social-media.png";

const iconMap = { 
  "writing_2327400 1.png": writingIcon,
  "design-tool.png": designIcon,
  "camera-tools.png": cameraIcon,
  "operation.png": operationIcon,
  "portfolio.png": portfolioIcon,
  "social-media.png": socialIcon,
};

const MainSection = ({ cartItems, onAddToCart }) => {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900">Premium Digital Tools</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
            Choose from our curated collection of premium digital products designed
            to boost your productivity and creativity.
          </p>

          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveTab("products")}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-colors ${
                activeTab === "products"
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-purple-400"
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab("cart")}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-colors ${
                activeTab === "cart"
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-purple-400"
              }`}
            >
              Cart ({cartItems.length})
            </button>
          </div>
        </div>

        {/* Products Section */}
        {activeTab === "products" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}

        {/* Cart Section */}
        {activeTab === "cart" && (
          <div className="max-w-2xl mx-auto">
            {cartItems.length === 0 ? (
              <div className="text-center py-20 text-gray-400">
                <i className="fa-solid fa-cart-shopping text-5xl mb-4 block"></i>
                <p className="text-lg font-medium">Your cart is empty!</p>
                <p className="text-sm mt-1">Add some products to get started.</p>
              </div>
            ) : (
              <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4">

                <h3 className="text-xl font-bold text-gray-900">Your Cart</h3>

                <div className="flex flex-col gap-3">
                  {cartItems.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-xl p-4 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                          <img src={iconMap[item.icon]} alt={item.name} className="w-7 h-7 object-contain" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.name}</h4>
                          <p className="text-gray-500 text-sm">${item.price}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          onAddToCart(item, true);
                          toast.error(`${item.name} removed from cart!`);
                        }}
                        className="text-red-500 hover:text-red-700 font-semibold text-sm transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-gray-500 font-medium">Total:</span>
                  <span className="text-2xl font-extrabold text-gray-900">
                    ${cartItems.reduce((sum, item) => sum + item.price, 0)}
                  </span>
                </div>

                <button
                  onClick={() => {
                    onAddToCart(null, false, true);
                    toast.success("Checkout successful! Cart cleared.");
                  }}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-full transition-colors"
                >
                  Proceed To Checkout
                </button>

              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};

export default MainSection;