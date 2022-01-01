import React,{useState, useEffect} from "react";
import SideBarAdmin from "../components/SidebarAdmin";
import { getAllPets } from "../api/pets";
import AdminPet from "../components/AdminPet";

const AdminPets = () => {

    const [pets, setPets] = useState([]);

    useEffect(() => {
        getAllPets().then(data => setPets(data));
    }, []);


    return (

        <div className="container lg:w-11/12 sm:full mx-auto flex flex-wrap pt-4 pb-12">
            <SideBarAdmin />
            <div className="py-8 px-10">
                <h1 className="text-2xl">Dieren</h1>
                <section class="bg-white py-8">
                    <div className="container sm:w-full mx-auto flex flex-col flex-wrap pt-4 pb-12 gap-2">
                        {pets.length > 0 && pets.map(pet => <AdminPet pet={pet} />)}
                    </div>
                </section>
            </div>
        </div>
    );
};


export default AdminPets;