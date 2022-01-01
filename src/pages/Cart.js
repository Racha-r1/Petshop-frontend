import React from "react";
import CartItem from "../components/CartItem";

const Cart = () => {

   const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

   const total = () => {
      let total = 0;
      cart.forEach(cartItem => {
         total += parseFloat(cartItem.product.price) * cartItem.quantity;
      });
      return total.toFixed(2);
   }

   return(<div class="container lg:w-11/12 mx-auto mt-10">
            <h1 className="text-xl font-bold px-5"> Shopping Cart </h1>
            <div className={`${cart.length > 0 ? "flex flex-col my-10 border-b-2 border-gray-400" : "flex flex-col my-10"} `}>
                 {
                    cart.length > 0 ?
                    JSON.parse(sessionStorage.getItem("cart")).map(cartItem =><CartItem cartItem={cartItem} />) : <h1 className="px-5">Your cart is empty</h1> 
                 }
            </div>
            <div>
                {
                     cart.length > 0 ?
                     <div className="flex flex-col">
                        <div className="flex justify-end items-center px-5 py-5">
                           <p className="text-lg mr-5"> Totaal </p>
                           <p className="text-md"> {`€ ${total()}`} </p>
                        </div>
                        <div className="flex justify-end">
                           <button className="transition ease-in-out duration-300 px-3 py-2 bg-gray-800 mx-5 mb-10 text-white border-2 border-gray-800 hover:bg-white hover:text-gray-800"> Bestellen </button>
                        </div>
                     </div> : null
                }
            </div>
        </div>)

}

export default Cart;

