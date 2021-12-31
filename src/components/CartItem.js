import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";


const CartItem = ({cartItem}) => {

    const handleDelete = () => {
        const newCart = JSON.parse(sessionStorage.getItem("cart")).filter(item => item.product.id !== cartItem.product.id);
        sessionStorage.removeItem("cart");
        sessionStorage.setItem("cart", JSON.stringify(newCart));
        window.location.reload();
    };
    
     return (
         <div className="flex items-center justify-between border-t-2 border-gray-400 w-full px-5 py-2"> 
              <img src={cartItem.product.image} alt="foto" className="w-28" />
              <p className="text-sm w-36"> {cartItem.product.name} </p>
              <p className="text-sm"> {"x" + cartItem.quantity}</p>
              <p className="text-sm"> {`€ ${parseFloat(cartItem.product.price).toFixed(2)}`}</p>
              <button onClick={handleDelete} className="hover:opacity-50"> <FontAwesomeIcon icon={faTrashAlt}/> </button>
         </div>
     )




}

export default CartItem;