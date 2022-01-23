import React,{useState, useEffect} from "react";
import SideBarAdmin from "../components/SidebarAdmin";
import { getAllCategories } from "../api/category";
import AdminCategory from "../components/AdminCategory";

const AdminCategorieën = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategories().then(data => setCategories(data));
    }, []);


    return (

        <div className="lg:w-11/12 sm:full mx-auto flex flex-wrap pt-4 pb-12">
            <SideBarAdmin />
            <div className="py-8 px-10">
                <h1 className="text-2xl">Categorieën</h1>
                <section class="bg-white py-8">
                <button className="transition ease-in-out duration-300 px-3 py-2 mr-5 bg-gray-800 text-white border-2 border-gray-800 hover:bg-white hover:text-gray-800" onClick={() => window.location = "/admin/categories/toevoegen" }> Toevoegen </button>
                    <div className="sm:w-full mx-auto flex flex-col flex-wrap pt-4 pb-12 gap-2">
                        {categories.length > 0 && categories.map(category => <AdminCategory category={category} />)}
                    </div>
                </section>
            </div>
        </div>
    );
};


export default AdminCategorieën;