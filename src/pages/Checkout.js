import React,{useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { addOrderItem, addOrder } from "../api/order";
import AddressSelect from "../components/AddressSelect";
import { getAddressById } from "../api/addresses";


const CheckoutPage = () => {

    const { isAuthenticated, user, isLoading, getAccessTokenSilently } = useAuth0();
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    const [selected, setSelected] = useState(undefined);
    const [addresses, setAddresses] = useState([]);


    const total = () => {
        let total = 0;
        cart.forEach(cartItem => {
           total += parseFloat(cartItem.product.price) * cartItem.quantity;
        });
        return total.toFixed(2);
     }


    const handleCheckout = async() => {

        if (addresses.length < 1){
            alert("Gelieve eerst een bezorgadres toe te voegen aan je account");
            return;
        }

        if (selected === undefined){
            alert("Gelieve eerst een bezorgadres te selecteren");
            return;
        }
    
        
        const orderItems = cart.map((cartItem) => {
            return {
                product: { id: cartItem.product.id},
                amount: cartItem.quantity
            };

        });
        const token = await getAccessTokenSilently();
        const address = await getAddressById(selected);
        const order = {
            order_price : total(),
            items: orderItems,
            user_email: user.email,
            shipping_address: address
        };
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
            <div className="lg:w-11/12 sm:full mx-auto pt-4 pb-12">
                <div className="py-8 px-10">
                    <h1 className="text-2xl">Checkout</h1>
                    <div className="flex items-start gap-4 flex-wrap">
                        <div className="py-9">
                            <AddressSelect selected={selected} setSelected={setSelected} addresses={addresses} setAddresses={setAddresses}/>
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