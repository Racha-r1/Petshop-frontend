import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { deletePetById } from "../api/pets";
import { useAuth0 } from "@auth0/auth0-react";

const AdminPet = ({pet}) => {
    
    const {getAccessTokenSilently} = useAuth0();

    const deletePet = () => {
        getAccessTokenSilently().then(token => {
            deletePetById(pet.id, token).then(response => {
                if (response === 200) {
                    window.location.reload();
                }
            })
        })
    };
   
    return (
    <div class="w-80 flex items-center">
            <p class="pt-1 text-gray-900 flex-1">{pet.name}</p>
            <div class="flex items-center">
                <button className="transition ease-in-out duration-300 px-3 py-2 mr-5 bg-gray-800 text-white border-2 border-gray-800 hover:bg-white hover:text-gray-800"> Aanpassen </button>
                <button  className="transition ease-in-out duration-300 hover:opacity-50" onClick={deletePet}>
                     <FontAwesomeIcon icon={faTrashAlt}/>
                </button>
            </div>
    </div>
   );
}
export default AdminPet;