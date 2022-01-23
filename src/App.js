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
import UserDashboard from "./pages/UserDashboard";
import UserOrders from "./pages/UserOrders";
import UserOrderDetails from "./pages/UserOrderDetails";
import ProtectedComponent  from "./components/ProtectedComponent";

function App() {

  const [cart, setCart] = useState(JSON.parse(sessionStorage.getItem("cart")) || []);
  return (
    <div className="flex flex-col min-h-screen">
      <Nav cart={cart}/>
          <main className="flex-grow">
            <Routes>
               {/* Public routes , checkout requires authentication */}
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/shop" element={<Shop setCart={setCart}/>} />
                <Route path="/products/:id" element={<ProductDetails setCart={setCart}/>} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/user/dashboard" element={<UserDashboard />} />
                <Route path="/user/orders" element={<UserOrders />} />
                <Route path="/user/orders/:id" element={<UserOrderDetails />} />
                {/* Admin routes are protected against unauthorized users */}
                <Route path="/admin/products" element={<ProtectedComponent element={AdminProducts} />} />
                <Route path="/admin/products/toevoegen" element={<ProtectedComponent element={AdminProductsToevoegen} />} />
                <Route path="/admin/products/aanpassen/:id" element={<ProtectedComponent element={AdminProductsAanpassen} />} />
                <Route path="/admin/pets" element={<ProtectedComponent element={AdminPets} />} />
                <Route path="/admin/pets/aanpassen/:id" element={<ProtectedComponent element={AdminPetsAanpassen} />} />
                <Route path="/admin/pets/toevoegen" element={<ProtectedComponent element={AdminsPetsToevoegen} />} />
                <Route path="/admin/categories" element={<ProtectedComponent element={AdminCategorieën} /> }/>
                <Route path="/admin/categories/aanpassen/:id" element={<ProtectedComponent element={AdminCategoriesAanpassen} />} /> 
                <Route path="/admin/categories/toevoegen" element={<ProtectedComponent element={AdminCategoriesToevoegen} /> } />
            </Routes>
          </main>
      <Footer />
    </div>
  );
}

export default App;
