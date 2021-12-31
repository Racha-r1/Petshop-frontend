import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/products";

const ProductDetails = ({setCart}) => {

    const { id } = useParams();
    const [product, setProduct] = useState(undefined);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
         getProductById(id).then(data => setProduct(data));
    }, []);

    const onChangeListener = (event) => {
        setQuantity(event.target.value);
    }

    const addToCart = () => {
        // make a cart object and save it to the session storage
        const cartObject = {
            product: product,
            quantity: quantity
        };
        // get the cart from the session storage in case it exists else create a new list
        const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
        // check if the product is already in the cart
        const index = cart.findIndex(item => item.product.id === product.id);
        if (index === -1){
            // if not add it to the cart
            cart.push(cartObject);
        }
        else {
            // if it is update the quantity
            cart[index].quantity = quantity;
        }
        
        sessionStorage.setItem('cart', JSON.stringify(cart));
        setCart(cart);

    }

    return (
        <div className="container lg:w-11/12 sm:w-full  mx-auto flex flex-wrap py-12 px-4">
            {
                product &&  <>
                                <div className="mr-10">
                                    <img className="w-full" src={product.image} alt="product" />
                                </div>
                                <div className="flex flex-col lg:justify-around sm:my-8">
                                    <h1 className="text-3xl font-bold">{product.name}</h1>
                                    <div>
                                        <p className="text-2xl">{`€ ${parseFloat(product.price).toFixed(2)}`}</p>
                                        <div className="flex flex-wrap items-center mt-2">
                                            <input className="mr-2 p-3 border-2 border:black" type="number" id="quantity" name="quantity" min="1" onChange={onChangeListener} value={quantity}/>
                                            <button className="bg-black p-3 hover:bg-white border-2 border:black " onClick={addToCart}>
                                                <svg class="fill-white hover:fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                        <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                                                        <circle cx="10.5" cy="18.5" r="1.5" />
                                                        <circle cx="17.5" cy="18.5" r="1.5" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-gray-900"><span className="text-lg font-bold mr-4">Categorie: </span> {product.category.name}</p>
                                        <p className="text-gray-900"><span className="text-lg font-bold mr-4">Diersoort: </span> {product.pet.name}</p>
                                    </div>
                                </div>
                                <div className="pt-5">
                                    <h1 className="text-3xl font-bold">Beschrijving</h1>
                                    <p className="pt-1 text-gray-900">{product.description}</p>
                                </div>
                            </>
            }
            
        </div>
    )

}

export default ProductDetails;