import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const CheckoutPage = () => {

    const { isAuthenticated, user } = useAuth0();
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];


    const total = () => {
        let total = 0;
        cart.forEach(cartItem => {
           total += parseFloat(cartItem.product.price) * cartItem.quantity;
        });
        return total.toFixed(2);
     }

        return (
            <>
            {isAuthenticated && 
            <div className="container lg:w-11/12 sm:full mx-auto pt-4 pb-12">
                <div className="py-8 px-10">
                    <h1 className="text-2xl">Checkout</h1>
                    <div className="flex items-start gap-4 flex-wrap">
                        <div className="py-9 flex justify-between flex-col flex-1 lg:mr-20">
                            <h2 className="text-xl">Gegevens</h2>
                            <div className="flex items-center gap-2 my-5">
                                <label htmlFor="user_email" className="text-md w-20">Email: </label>
                                <input type="email" id="user_email" className="bg-white shadow-md rounded px-4 py-2 flex-1 md:flex-initial w-full" value={user.email} readOnly/>
                            </div>
                            <div className="flex items-center gap-2 my-5">
                                <label htmlFor="straat" className="text-md w-20">Straat: </label>
                                <input type="text" id="straat" className="bg-white shadow-md rounded px-4 py-2 flex-1 md:flex-initial w-full" />
                            </div>
                            <div className="flex items-center gap-2 my-5">
                                <label htmlFor="nummer" className="text-md w-20">Nummer: </label>
                                <input type="text" id="nummer" className="bg-white shadow-md rounded px-4 py-2 flex-1 md:flex-initial w-full" />
                            </div>
                            <div className="flex items-center gap-2 my-5 ">
                                <label htmlFor="postcode" className="text-md w-20">Postcode: </label>
                                <input type="text" id="postcode" className="bg-white shadow-md rounded px-4 py-2 flex-1 md:flex-initial w-full" />
                            </div>
                            <div className="flex items-center gap-2 my-5">
                                <label htmlFor="stad" className="text-md w-20">Stad: </label>
                                <input type="text" id="stad"  className="bg-white shadow-md rounded px-4 py-2 flex-1 md:flex-initial w-full" />
                            </div>
                        </div>
                        <div className="bg-white shadow-md rounded gap-10 px-4 py-6 flex flex-col flex-wrap mt-5">
                            <h2 className="text-xl">Overzicht van de bestelling</h2>
                            {
                                cart.map(cartItem => {
                                    return <div className="flex gap-4 flex-1">
                                        <img src={cartItem.product.image} alt="foto" className="w-28" />
                                            <div className="flex gap-2 flex-col">
                                                <p className="text-md"> {cartItem.product.name} </p>
                                                <p className="text-sm"> {"Aantal: " + cartItem.quantity}</p>
                                                <p className="text-sm"> {`€ ${parseFloat(cartItem.product.price).toFixed(2)}`}</p>
                                            </div>
                                        </div>
                                })
                            }
                            <p className="px-5">Totaal: {`€ ${total()}`} </p>
                            <button className="transition ease-in-out duration-300 px-3 py-2 bg-gray-800 mx-5 mb-10 text-white border-2 border-gray-800 hover:bg-white hover:text-gray-800"> Bestellen </button>
                    
                        </div>
                    </div>
                </div>
            </div>
           }</>)







}

export default CheckoutPage;