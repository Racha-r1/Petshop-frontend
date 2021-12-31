import React,{useState} from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import ProductDetails from "./components/ProductDetails";
import Cart from "./pages/Cart";

function App() {

  const [cart, setCart] = useState(JSON.parse(sessionStorage.getItem("cart")) || []);
  return (
    <div className="flex flex-col min-h-screen">
      <Nav cart={cart}/>
          <main className="flex-grow">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/products/:id" element={<ProductDetails setCart={setCart}/>} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
      <Footer />
    </div>
  );
}

export default App;
