import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Componenets/Sidebar/Sidebar";
import Home from "./Componenets/home";
import Shop from "./Componenets/Shop";
import "./App.css";

function App() {
  const cartRef = useRef(null);

  const scrollToCart = () => {
    if (cartRef.current) {
      cartRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <div className="app">
        <Sidebar scrollToCart={scrollToCart} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
