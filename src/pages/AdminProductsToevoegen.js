import React,{useState} from "react";
import { useParams } from "react-router-dom";
import SideBarAdmin from "../components/SidebarAdmin";
import { addProduct } from "../api/products";
import { useAuth0 } from "@auth0/auth0-react";

const AdminProductsToevoegen = () => {
    
    const {id} = useParams();
    const [productName, setproductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const {getAccessTokenSilently} = useAuth0();

    const addProductHandler = () => {
        if (productName.length < 1){
            alert("Naam mag niet leeg zijn")
        }
        else {
          
        }

    }

    return (
        <>
            {
                <div className="container lg:w-11/12 sm:full mx-auto flex flex-wrap pt-4 pb-12">
                    <SideBarAdmin />
                    <div className="py-8 px-10">
                        <h1 className="text-2xl">Products</h1>
                        <section class="bg-white py-8">
                            <div className="container sm:w-full mx-auto flex flex-col flex-wrap pt-4 pb-12 gap-2">
                                <div className="flex gap-2 items-center flex-wrap mb-4">
                                    <label htmlFor="product_name" className="w-24"> Naam: </label>
                                    <input className="bg-white shadow-md rounded px-4 py-2 flex-1" type="text" value={productName} id="product_name" onChange={(e) => setproductName(e.target.value)}  />
                                </div>
                                <div className="flex gap-2 items-center flex-wrap mb-4">
                                    <label htmlFor="product_description" className="w-24"> Beschrijving: </label>
                                    <textarea className="bg-white shadow-md rounded px-4 py-2 flex-1" cols="50" value={productDescription} id="product_description" onChange={(e) => setProductDescription(e.target.value)}  />
                                </div>
                                <div className="flex gap-2 items-center flex-wrap mb-4">
                                    <label htmlFor="product_price" className="w-24"> Prijs: </label>
                                    <input className="bg-white shadow-md rounded px-4 py-2 flex-1" type="text" value={productPrice} id="product_price" onChange={(e) => setProductPrice(e.target.value)}  />
                                </div>
                                <div className="flex gap-2 items-center flex-wrap mb-4">
                                    <label htmlFor="product_image" className="w-24"> Foto: </label>
                                    <input className="bg-white shadow-md rounded px-4 py-2 flex-1" type="file" value={productPrice} id="product_image" onChange={(e) => setProductPrice(e.target.value)}  />
                                </div>
                                <button  className="transition ease-in-out duration-300 px-3 py-2 bg-gray-800 text-white border-2 border-gray-800 hover:bg-white hover:text-gray-800" onClick={addProductHandler}>
                                    Product opslaan
                                </button>
                            </div>
                        </section>
                </div>
                </div>
                
            }
        </>
    )

}

export default AdminProductsToevoegen;