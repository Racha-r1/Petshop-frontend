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

        <div className="container lg:w-11/12 sm:full mx-auto flex flex-wrap pt-4 pb-12">
            <SideBarAdmin />
            <div className="py-8 px-10">
                <h1 className="text-2xl">Categorieën</h1>
                <section class="bg-white py-8">
                    <div className="container sm:w-full mx-auto flex flex-col flex-wrap pt-4 pb-12 gap-2">
                        {categories.length > 0 && categories.map(category => <AdminCategory category={category} />)}
                    </div>
                </section>
            </div>
        </div>
    );
};


export default AdminCategorieën;