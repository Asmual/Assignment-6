import { useState } from "react";
import './App.css'
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="font-manrope">
      <Navbar cartCount={cartCount} />
      <Banner />
    </div>
  );
}

export default App;