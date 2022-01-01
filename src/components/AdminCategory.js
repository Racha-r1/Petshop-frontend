import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { deleteCategoryById } from "../api/category";
import { useAuth0 } from "@auth0/auth0-react";

const AdminCategory = ({category}) => {

    const {getAccessTokenSilently} = useAuth0();
    const deleteCategory = () => {
        getAccessTokenSilently().then(token => {
            deleteCategoryById(category.id, token).then(response => {
                if (response === 200) {
                    window.location.reload();
                }
            })
        })
    };
    
   
    return (
    <div class="w-80 flex items-center">
            <p class="pt-1 text-gray-900 flex-1">{category.name}</p>
            <div class="flex items-center">
                <button className="transition ease-in-out duration-300 px-3 py-2 mr-5 bg-gray-800 text-white border-2 border-gray-800 hover:bg-white hover:text-gray-800"> Aanpassen </button>
                <button  className="transition ease-in-out duration-300 hover:opacity-50" onClick={deleteCategory}>
                     <FontAwesomeIcon icon={faTrashAlt}/>
                </button>
            </div>
    </div>
   );
}
export default AdminCategory;