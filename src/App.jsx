import { useState } from "react";
import './App.css'
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import MainSection from "./components/MainSection";
import Steps from "./components/Steps";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer position="top-right" autoClose={2000} />
      <Navbar cartCount={cartItems.length} />
      <Banner />
      <Stats />
      <MainSection cartItems={cartItems} onAddToCart={handleCart} />
      <Steps />
    </div>
  );
}

export default App;