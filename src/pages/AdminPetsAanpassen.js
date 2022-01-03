import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import SideBarAdmin from "../components/SidebarAdmin";
import { updatePetById, getPetById } from "../api/pets";
import { useAuth0 } from "@auth0/auth0-react";

const AdminPetsAanpassen = () => {
    
    const {id} = useParams();
    const [pet, setPet] = useState(undefined);
    const [petname, setPetname] = useState("");
    const {getAccessTokenSilently} = useAuth0();

    useEffect(() => {
        getPetById(id).then(data => {
             setPet(data)
             setPetname(data.name)});
    },[]);

    const updatePet = () => {
        if (petname.length < 1){
            alert("Naam mag niet leeg zijn")
        }
        else {
            const updatedPet = {
                name: petname,
                id: pet.id
            }
            getAccessTokenSilently().then(token => {
                updatePetById(pet.id, updatedPet,token).then(status => {
                    if (status === 200) {
                        window.location.reload();
                    }
                });
            });
        }

    }

    return (
        <>
            {
                pet && 
                <div className="container lg:w-11/12 sm:full mx-auto flex flex-wrap pt-4 pb-12">
                    <SideBarAdmin />
                    <div className="py-8 px-10">
                        <h1 className="text-2xl">Dieren</h1>
                        <section class="bg-white py-8">
                            <div className="container sm:w-full mx-auto flex flex-col flex-wrap pt-4 pb-12 gap-2">
                                <input className="bg-white shadow-md rounded px-4 py-2 mb-4" type="text" value={petname} onChange={(e) => setPetname(e.target.value)}  />
                                <button  className="transition ease-in-out duration-300 px-3 py-2 bg-gray-800 text-white border-2 border-gray-800 hover:bg-white hover:text-gray-800" onClick={updatePet}>
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


export default AdminPetsAanpassen;