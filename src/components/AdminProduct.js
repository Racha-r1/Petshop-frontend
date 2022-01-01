import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";
import { deleteProductById } from "../api/products";

const AdminProduct = ({product}) => {

    const {getAccessTokenSilently} = useAuth0();
    const deleteProduct = () => {
        getAccessTokenSilently().then(token => {
            deleteProductById(product.id, token).then(response => {
                if (response === 200) {
                    window.location.reload();
                }
            })
        })
    }

    return (
    <div class="md:w-1/3 xl:w-80 p-6 flex flex-col ">
            <Link to={`/products/${product.id}`}>
                <img class="hover:grow hover:shadow-lg" src={product.image} alt="foto" />
            </Link>
            <p class="pt-1 text-gray-900 flex-1">{product.name}</p>
            <div class="pt-3 flex items-center justify-between">
                <button className="transition ease-in-out duration-300 px-3 py-2 bg-gray-800 text-white border-2 border-gray-800 hover:bg-white hover:text-gray-800"> Aanpassen </button>
                <button  className="transition ease-in-out duration-300 hover:opacity-50" onClick={deleteProduct}>
                     <FontAwesomeIcon icon={faTrashAlt}/>
                </button>
            </div>
    </div>
   );
}
export default AdminProduct;