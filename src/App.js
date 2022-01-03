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
import AdminCategoriesAanpassen from "./pages/AdminCategoriesAanpassen";
import AdminCategoriesToevoegen from "./pages/AdminCategoryToevoegen";
import AdminProductsToevoegen from "./pages/AdminProductsToevoegen";
import AdminProductsAanpassen from "./pages/AdminProductsAanpassen";
import CheckoutPage from "./pages/Checkout";

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
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/admin/products" element={<AdminProducts />} />
                <Route path="/admin/products/toevoegen" element={<AdminProductsToevoegen />} />
                <Route path="/admin/products/aanpassen/:id" element={<AdminProductsAanpassen />} />
                <Route path="/admin/pets" element={<AdminPets />} />
                <Route path="/admin/pets/aanpassen/:id" element={<AdminPetsAanpassen />} />
                <Route path="/admin/pets/toevoegen" element={<AdminsPetsToevoegen />} />
                <Route path="/admin/categories" element={<AdminCategorieën />} />
                <Route path="/admin/categories/aanpassen/:id" element={<AdminCategoriesAanpassen />} />
                <Route path="/admin/categories/toevoegen" element={<AdminCategoriesToevoegen />} />
            </Routes>
          </main>
      <Footer />
    </div>
  );
}

export default App;
