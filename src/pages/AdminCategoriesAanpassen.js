import React,{useEffect, useState, useRef} from "react";
import { useParams } from "react-router-dom";
import SideBarAdmin from "../components/SidebarAdmin";
import { getCategoryById, updateCategoryById } from "../api/category";
import { getAllPets } from "../api/pets";
import { useAuth0 } from "@auth0/auth0-react";

const AdminCategoriesAanpassen = () => {
    
    const {id} = useParams();
    const [category, setCategory] = useState(undefined);
    const [categoryName, setCategoryName] = useState("");
    const {getAccessTokenSilently} = useAuth0();

    useEffect(() => {
        getCategoryById(id).then(data => {
             setCategory(data)
             setCategoryName(data.name)});
    },[]);

    const updateCategory = () => {
        if (categoryName.length < 1){
            alert("Naam mag niet leeg zijn")
        }
        else {
            const updatedCategory = {
                name: categoryName,
                id: category.id,
            }
            console.log(updatedCategory);
            getAccessTokenSilently().then(token => {
                updateCategoryById(category.id, updatedCategory,token).then(status => {
                    if (status === 200) {
                        window.location = "/admin/categories";
                    }
                });
            });
        }

    }

    return (
        <>
            {
                category && 
                <div className="container lg:w-11/12 sm:full mx-auto flex flex-wrap pt-4 pb-12">
                    <SideBarAdmin />
                    <div className="py-8 px-10">
                        <h1 className="text-2xl">Categorieën</h1>
                        <section class="bg-white py-8">
                            <div className="container sm:w-full mx-auto flex flex-col flex-wrap pt-4 pb-12 gap-2">
                                <input className="bg-white shadow-md rounded px-4 py-2 mb-4" type="text" value={categoryName} onChange={(e) => setCategoryName(e.target.value)}  />
                                <button  className="transition ease-in-out duration-300 px-3 py-2 bg-gray-800 text-white border-2 border-gray-800 hover:bg-white hover:text-gray-800" onClick={updateCategory}>
                                    Wijzigingen opslaan
                                </button>
                            </div>
                        </section>
                </div>
                </div>
                
            }
        </>
    )

}

export default AdminCategoriesAanpassen;