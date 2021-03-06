import React,{useState} from "react";
import SideBarAdmin from "../components/SidebarAdmin";
import { addProduct } from "../api/products";
import { getAllPets } from "../api/pets";
import { useAuth0 } from "@auth0/auth0-react";
import { initializeApp } from "firebase/app";
import { getStorage, ref , uploadBytes,getDownloadURL  } from "firebase/storage";
import { useEffect } from "react/cjs/react.development";
import { getAllCategories } from "../api/category";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};  

const firebaseApp = initializeApp(config);

const AdminProductsToevoegen = () => {
    
    const [productName, setproductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [img, setImg] = useState(undefined);
    const {getAccessTokenSilently} = useAuth0();
    const [categories, setCategories] = useState([]);
    const [pets, setPets] = useState([]);

    const addProductHandler = async(e) => {
        e.preventDefault();
        const storage = getStorage(firebaseApp);
        const storageRef = ref(storage, `/images/${img.name}`);
        const snapshot = await uploadBytes(storageRef, img);
        const downloadURL = await getDownloadURL(snapshot.ref);
        
        if (productName.length < 1 || productDescription.length < 1 || productPrice.length < 1 ){
            alert("Vul alle velden in");
        }
        else {
            if (isNaN(productPrice)){
                alert("Vul een geldige prijs in");
            }
            else {
                const newProduct = {
                    name: productName,
                    description: productDescription,
                    price: productPrice,
                    image: downloadURL,
                    category: {
                        id: document.querySelector("#product_categorie").options[document.querySelector("#product_categorie").selectedIndex].value,
                        name: document.querySelector("#product_categorie").options[document.querySelector("#product_categorie").selectedIndex].text
                    },
                    pet: {
                        id: document.querySelector("#product_pet").options[document.querySelector("#product_pet").selectedIndex].value,
                        name: document.querySelector("#product_pet").options[document.querySelector("#product_pet").selectedIndex].text
                    }
                }
                getAccessTokenSilently().then(token => {
                    addProduct(newProduct,token).then(status => {
                        if (status === 200) {
                            window.location = "/admin/products";
                        }
                    });
                });
            }
        }
    }

    useEffect(() => {
        getAllCategories().then(data => {
            setCategories(data);
        });
        getAllPets().then(data => {
            setPets(data);
        });
    },[]);
        

    return (
        <>
            {
                <div className="lg:w-11/12 sm:full mx-auto flex flex-wrap pt-4 pb-12">
                    <SideBarAdmin />
                    <div className="py-8 px-10">
                        <h1 className="text-2xl">Products</h1>
                        <section class="bg-white py-8">
                            <div className="sm:w-full mx-auto flex flex-col flex-wrap pt-4 pb-12 gap-2">
                                <div className="flex gap-2 items-center flex-wrap mb-4">
                                    <label htmlFor="product_name" className="w-24"> Naam: </label>
                                    <input className="bg-white shadow-md rounded px-4 py-2 flex-1" type="text" value={productName} id="product_name" onChange={(e) => setproductName(e.target.value)} required />
                                </div>
                                <div className="flex gap-2 items-center flex-wrap mb-4">
                                    <label htmlFor="product_description" className="w-24"> Beschrijving: </label>
                                    <textarea className="bg-white shadow-md rounded px-4 py-2 flex-1" cols="50" value={productDescription} id="product_description" onChange={(e) => setProductDescription(e.target.value)}  required/>
                                </div>
                                <div className="flex gap-2 items-center flex-wrap mb-4">
                                    <label htmlFor="product_price" className="w-24"> Prijs: </label>
                                    <input className="bg-white shadow-md rounded px-4 py-2 flex-1" type="text" value={productPrice} id="product_price" onChange={(e) => setProductPrice(e.target.value)}  required/>
                                </div>
                                <div className="flex gap-2 items-center flex-wrap mb-4">
                                    <label htmlFor="product_image" className="w-24"> Foto: </label>
                                    <input className="bg-white shadow-md rounded px-4 py-2 flex-1" type="file"  id="product_image" onChange={(e) => e.target.files[0] && setImg(e.target.files[0])} required/>
                                </div>
                                <div className="flex gap-2 items-center flex-wrap mb-4">
                                    <label htmlFor="product_categorie" className="w-24"> Categorie: </label>
                                    <select className="bg-white shadow-md rounded px-4 py-2 flex-1"  id="product_categorie">
                                        {
                                            categories.map(category => {
                                                return (
                                                    <option value={category.id}>{category.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="flex gap-2 items-center flex-wrap mb-4">
                                    <label htmlFor="product_pet" className="w-24"> Dier: </label>
                                    <select className="bg-white shadow-md rounded px-4 py-2 flex-1" id="product_pet">
                                        {
                                            pets.map(pet => {
                                                return (
                                                    <option value={pet.id} >{pet.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <button  className="transition ease-in-out duration-300 px-3 py-2 bg-gray-800 text-white border-2 border-gray-800 hover:bg-white hover:text-gray-800" onClick={addProductHandler} required>
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