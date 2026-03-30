import { useState } from "react";
import './App.css'
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import MainSection from "./components/MainSection";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleCart = (product, isRemove = false, isCheckout = false) => {
    if (isCheckout) {
      setCartItems([]);
      return;
    }
    if (isRemove) {
      setCartItems((prev) => prev.filter((item) => item.id !== product.id));
      return;
    }
    const alreadyAdded = cartItems.find((item) => item.id === product.id);
    if (!alreadyAdded) {
      setCartItems((prev) => [...prev, product]);
    }
  };

  return (
    <div className="font-manrope">
      <Navbar cartCount={cartItems.length} />
      <Banner />
      <Stats />
      <MainSection cartItems={cartItems} onAddToCart={handleCart} />
    </div>
  );
}

export default App;