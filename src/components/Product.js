import React from "react";
import { Link } from "react-router-dom";


const Product = ({product,setCart}) => {

    const addToCart = () => {
        // make a cart object and save it to the session storage
        const cartObject = {
            product: product,
            quantity: 1
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
            cart[index].quantity = 1;
        }
        
        sessionStorage.setItem('cart', JSON.stringify(cart));
        setCart(cart);

    }
   
    return (
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-6 flex flex-col ">
            <Link to={`/products/${product.id}`}>
                <img class="hover:grow hover:shadow-lg" src={product.image} alt="foto" />
            </Link>
            <div class="pt-3 flex items-center justify-between flex-1">
                <p class="">{product.name}</p>
                <button className="transition ease-in-out duration-300 bg-gray-800 p-3 hover:bg-white border-2 border:gray-800 fill-white hover:fill-gray-800" onClick={addToCart}>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                            <circle cx="10.5" cy="18.5" r="1.5" />
                            <circle cx="17.5" cy="18.5" r="1.5" />
                    </svg>
                </button>
            </div>
            <p class="pt-1 text-gray-900">{`€ ${parseFloat(product.price).toFixed(2)}`}</p>
    </div>
   );


}


export default Product;