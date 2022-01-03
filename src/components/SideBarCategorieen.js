import React, {useState, useEffect} from "react";
import { getAllCategories } from "../api/category";
import { getAllPets } from "../api/pets";
import { getAllProducts } from "../api/products";

const SideBarCategorieen = ({products, setProducts}) => {

    const [categories, setCategories] = useState([]);
    const [pets, setPets] = useState([]);

    useEffect(() => {
        getAllCategories().then(data => setCategories(data));
        getAllPets().then(data => setPets(data));
    }, []);

    const handleChange = (e) => {

        const filters = Array.from(document.querySelectorAll('input[name=filters]:checked'));
        const pets = [];
        const categories = [];
        filters.forEach(checkbox => {
            const soort = checkbox.id[checkbox.id.length - 1];
            if (soort === "P"){
                pets.push(checkbox.value);
            }
            else {
                categories.push(checkbox.value);
            }
        })
        getAllProducts().then(products => products.filter(product => {
            if (pets.length > 0 && categories.length > 0){
                return pets.includes(product.pet.name) && categories.includes(product.category.name);
            }
            else if (pets.length > 0){
                return pets.includes(product.pet.name);
            }
            else if (categories.length > 0){
                return categories.includes(product.category.name);
            }
            else {
                return true;
            }
        })).then(data => setProducts(data));
    }
      
    return (
        <div className="py-8 px-10">
            <div>{
                
                categories.length > 0 &&  
                <>
                    <h1 className="sm:text-xl md:text-lg font-bold"> Categorieën </h1>
                        {categories.map(category => 
                            <div className="px-2 mt-1">
                                <input type="checkbox" id={category.name+ "C"} value={category.name} name="filters" onChange={handleChange} />
                                <label for={category.name}> {category.name} </label>
                            </div>
                        )}
                </>
            }
                <br/>
                {   pets.length > 0 && <>
                    <h1 className="sm:text-xl md:text-lg font-bold"> Dieren </h1>
                        {
                        pets.map(pet => 
                            <div className="px-2 mt-1">
                                <input type="checkbox" id={pet.name + "P"} value={pet.name} name="filters" onChange={handleChange}  />
                                <label for={pet.name}> {pet.name} </label>
                            </div>
                        )
                    }
                </>
    }
            </div>
        </div>
    )



}



export default SideBarCategorieen;