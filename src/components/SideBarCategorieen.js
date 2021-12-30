import React, {useState, useEffect} from "react";
import { getAllCategories } from "../api/category";
import { getAllPets } from "../api/pets";

const SideBarCategorieen = () => {

    const [categories, setCategories] = useState([]);
    const [pets, setPets] = useState([]);

    useEffect(() => {
        getAllCategories().then(data => setCategories(data));
        getAllPets().then(data => setPets(data));
    }, []);
      
    return (
        <div className="py-8 px-10">
            <div>
                <h1 className="sm:text-xl md:text-lg font-bold"> Categorieën </h1>
                {
                    categories.length > 0 && categories.map(category => 
                        <div className="px-2 mt-1">
                            <input type="checkbox" id={category.name} value={category.name} name={category.name} />
                            <label for={category.name}> {category.name} </label>
                        </div>
                    )
                }
                <br/>
                <h1 className="sm:text-xl md:text-lg font-bold"> Dieren </h1>
                {
                    pets.length > 0 && pets.map(pet => 
                        <div className="px-2 mt-1">
                            <input type="checkbox" id={pet.name} value={pet.name} name={pet.name} />
                            <label for={pet.name}> {pet.name} </label>
                        </div>
                    )
                }
            </div>
        </div>
    )



}



export default SideBarCategorieen;