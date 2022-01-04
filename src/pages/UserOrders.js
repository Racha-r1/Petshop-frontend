import React,{useState, useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getOrdersByUserEmail } from "../api/order";
import SideBarUser from "../components/SidebarUser";


const UserOrders = () => {
    
    const { isAuthenticated, user } = useAuth0();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrdersByUserEmail(user.email).then(data => {
            setOrders(data);
        });
    },[user]);

    return (

        <>
            { isAuthenticated && <div className="container lg:w-11/12 sm:full mx-auto flex flex-wrap pt-4 pb-12">
                <SideBarUser />
                <div className="py-8 px-10">
                    <h1 className="text-2xl">Jouw bestellingen </h1>
                    <section class="bg-white py-8">
                         {
                            orders.length > 0 && orders.map(order => {
                            const date  = new Date(order.order_date);
                            return (<div className="bg-white shadow-md rounded px-4 py-6 flex flex-col flex-wrap gap-2 mt-5">
                                <p> {date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()} | Bestellingsnummer: {order.id} </p>
                                <button  className="transition ease-in-out duration-300 px-3 py-2 bg-gray-800 text-white border-2 border-gray-800 hover:bg-white hover:text-gray-800" onClick={() => window.location = "/user/orders/" + order.id}>
                                  Bekijk details van de bestelling
                                </button>
                            </div> ) })
                         }
                    </section>
                </div>
            </div>}
        </>
    )

}

export default UserOrders;