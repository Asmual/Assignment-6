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

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow relative">
      
      {/* Tag */}
      <span
        className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${
          tagStyles[tagType] || "bg-gray-100 text-gray-600"
        }`}
      >
        {tag}
      </span>

      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center bg-purple-50 rounded-xl">
        <i className={`${icon} text-purple-600 text-xl`}></i>
      </div>

      {/* Name & Description */}
      <div>
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        <p className="text-gray-500 text-sm mt-1 leading-relaxed">{description}</p>
      </div>

      {/* Price */}
      <div className="text-2xl font-extrabold text-gray-900">
        ${price}
        <span className="text-sm font-medium text-gray-500">
          {periodLabel[period] || period}
        </span>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
            <i className="fa-solid fa-check text-purple-600 text-xs"></i>
            {feature}
          </li>
        ))}
      </ul>

      {/* Buy Now Button */}
      <button
        onClick={() => onAddToCart(product)}
        className="mt-auto w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition-colors"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
