import { useState } from "react";
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

const tagStyles = {
  "best seller": "bg-yellow-100 text-yellow-700",
  popular: "bg-purple-100 text-purple-700",
  new: "bg-green-100 text-green-700",
};

const periodLabel = {
  monthly: "/Mo",
  yearly: "/Yr",
  "one-time": "/One-Time",
};

const ProductCard = ({ product, onAddToCart }) => {
  const { name, description, price, period, tag, tagType, features, icon } = product;
  const [added, setAdded] = useState(false);

  const handleBuyNow = () => {
    onAddToCart(product);
    setAdded(true);
    toast.success(`${name} added to cart!`);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow relative">

      <span className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${tagStyles[tagType] || "bg-gray-100 text-gray-600"}`}>
        {tag}
      </span>

      <div className="w-12 h-12 flex items-center justify-center bg-purple-50 rounded-xl">
        <img src={iconMap[icon]} alt={name} className="w-8 h-8 object-contain" />
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        <p className="text-gray-500 text-sm mt-1 leading-relaxed">{description}</p>
      </div>

      <div className="text-2xl font-extrabold text-gray-900">
        ${price}
        <span className="text-sm font-medium text-gray-500">{periodLabel[period] || period}</span>
      </div>

      <ul className="flex flex-col gap-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
            <i className="fa-solid fa-check text-purple-600 text-xs"></i>
            {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={handleBuyNow}
        disabled={added}
        className={`mt-auto w-full font-semibold py-2 rounded-full transition-all duration-300 ${
          added
            ? "bg-green-600 text-white cursor-default"
            : "bg-purple-600 hover:bg-purple-700 text-white"
        }`}
      >
        {added ? (
          <span className="flex items-center justify-center gap-2">
            <i className="fa-solid fa-check"></i> Added to Cart
          </span>
        ) : (
          "Buy Now"
        )}
      </button>

    </div>
  );
};

export default ProductCard;