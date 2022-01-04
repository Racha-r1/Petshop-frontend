import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { addOrderItem, addOrder } from "../api/order";
import AddressSelect from "../components/AddressSelect";


const CheckoutPage = () => {

    const { isAuthenticated, user, isLoading, getAccessTokenSilently } = useAuth0();
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];


    const total = () => {
        let total = 0;
        cart.forEach(cartItem => {
           total += parseFloat(cartItem.product.price) * cartItem.quantity;
        });
        return total.toFixed(2);
     }


    const handleCheckout = async() => {
    
        const straat = document.querySelector("#straat").value;
        const postcode = document.querySelector("#postcode").value;
        const nummer = document.querySelector("#nummer").value;
        const stad = document.querySelector("#stad").value;
        const orderItems = cart.map((cartItem) => {
            return {
                product: { id: cartItem.product.id},
                amount: cartItem.quantity
            };

        });
        const token = await getAccessTokenSilently();
        // hier komen de order items in terecht nadat ze zijn toegevoegd aan de DB we hebben deze id's nodig om de order items te kunnen linken aan een order
        // voeg elke item van de order items array toe aan de db 
        const items = [];
        orderItems.forEach((orderItem) => {
            console.log(orderItem);
            addOrderItem(orderItem,token).then(item => {
                console.log(item);
                items.push(item)});
        });
        // hier wordt de order aangemaakt met de items die we hebben toegevoegd aan de db
        console.log(items);
        const order = {
            order_price : total(),
            items: items,
            user_email: user.email,
            shipping_address: {
                straat: straat,
                user_email: user.email,
                postcode: postcode,
                nummer: nummer,
                stad: stad
            }
        };
        console.log(order);
        // hier wordt de order aangemaakt in de db
        addOrder(order,token).then(res => {
            if (res === 201 || res === 200) {
                alert("Order succesvol geplaatst");
                sessionStorage.removeItem("cart");
                window.location.href = "/";
            }
        });

    }

        return (
            <>
            {!isLoading && isAuthenticated && 
            <div className="container lg:w-11/12 sm:full mx-auto pt-4 pb-12">
                <div className="py-8 px-10">
                    <h1 className="text-2xl">Checkout</h1>
                    <div className="flex items-start gap-4 flex-wrap">
                        <div className="py-9">
                            <AddressSelect />
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
                            <button className="transition ease-in-out duration-300 px-3 py-2 bg-gray-800 mx-5 mb-10 text-white border-2 border-gray-800 hover:bg-white hover:text-gray-800" onClick={handleCheckout}> Bestellen </button>
                    
                        </div>
                    </div>
                </div>
            </div>
           }</>)







}

export default CheckoutPage;