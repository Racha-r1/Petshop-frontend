import React,{useState, useEffect} from "react";
import SideBarAdmin from "../components/SidebarAdmin";
import { getAllProducts } from "../api/products";
import AdminProduct from "../components/AdminProduct";
import { useAuth0 } from "@auth0/auth0-react";

const AdminProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then(data => setProducts(data));
    }, []);


    return (

        <div className="container lg:w-11/12 sm:full mx-auto flex flex-wrap pt-4 pb-12">
            <SideBarAdmin />
            <div className="py-8">
                <h1 className="text-2xl px-8">Products</h1>
                <section class="bg-white py-8">
                <button className="mx-8 transition ease-in-out duration-300 px-3 py-2 mr-5 bg-gray-800 text-white border-2 border-gray-800 hover:bg-white hover:text-gray-800" onClick={() => window.location = "/admin/products/toevoegen" }> Toevoegen </button>
                    <div className="container sm:w-full mx-auto flex flex-wrap pt-4 pb-12">
                        {products.length > 0 && products.map(product => <AdminProduct product={product} />)}
                    </div>
                </section>
            </div>
        </div>
    );
};


export default AdminProducts;