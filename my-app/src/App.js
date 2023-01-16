
import './App.css';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {Navbar} from "./components/navbar";

import React, {components} from "react";

import Shop from "./pages/shop/shop.jsx";
import Cart from "./pages/cart/cart.jsx";

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />

        <Routes>

          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
