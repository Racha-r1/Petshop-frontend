import React,{useState} from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import ProductDetails from "./components/ProductDetails";
import Cart from "./pages/Cart";
import AdminProducts from "./pages/AdminProducts.js";
import AdminCategorieën from "./pages/AdminCategorieën";
import AdminPets from "./pages/AdminPets";
import AdminPetsAanpassen from "./pages/AdminPetsAanpassen";
import AdminsPetsToevoegen from "./pages/AdminPetsToevoegen";

function App() {

  const [cart, setCart] = useState(JSON.parse(sessionStorage.getItem("cart")) || []);
  return (
    <div className="flex flex-col min-h-screen">
      <Nav cart={cart}/>
          <main className="flex-grow">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/shop" element={<Shop setCart={setCart}/>} />
                <Route path="/products/:id" element={<ProductDetails setCart={setCart}/>} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/admin/products" element={<AdminProducts />} />
                <Route path="/admin/categories" element={<AdminCategorieën />} />
                <Route path="/admin/pets" element={<AdminPets />} />
                <Route path="/admin/pets/aanpassen/:id" element={<AdminPetsAanpassen />} />
                <Route path="/admin/pets/toevoegen" element={<AdminsPetsToevoegen />} />
            </Routes>
          </main>
      <Footer />
    </div>
  );
}

export default App;
