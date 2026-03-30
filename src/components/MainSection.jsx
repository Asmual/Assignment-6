import { useState } from "react";
import products from "../data/products.json";
import ProductCard from "./ProductCard";

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
              <div className="flex flex-col gap-4">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center justify-between shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                        <i className={`${item.icon} text-purple-600`}></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.name}</h4>
                        <p className="text-purple-600 font-bold text-sm">${item.price}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => onAddToCart(item, true)}
                      className="text-red-500 hover:text-red-700 text-sm font-semibold border border-red-200 hover:border-red-400 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                ))}

                {/* Total & Checkout */}
                <div className="bg-white border border-gray-200 rounded-2xl p-5 mt-2">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600 font-medium">Total Products:</span>
                    <span className="font-bold text-gray-900">{cartItems.length}</span>
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-gray-600 font-medium">Total Price:</span>
                    <span className="font-extrabold text-xl text-purple-600">
                      ${cartItems.reduce((sum, item) => sum + item.price, 0)}
                    </span>
                  </div>
                  <button
                    onClick={() => onAddToCart(null, false, true)}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition-colors"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};

export default MainSection;
