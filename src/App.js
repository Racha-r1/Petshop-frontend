import React from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Shop from "./components/Shop";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
          <main className="flex-grow">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/products/:id" element={<ProductDetails />} />
            </Routes>
          </main>
      <Footer />
    </div>
  );
}

export default App;
