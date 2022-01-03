import React,{useState,useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getOrdersByUserEmail } from "../api/order";
import SideBarUser from "../components/SidebarUser";


const UserDashboard = () => {
    
    const { isAuthenticated, user } = useAuth0();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (isAuthenticated) {
            getOrdersByUserEmail(user.email).then(data => {
                setOrders(data);
            });
        }
    },[user])

    return (

        <>
            { isAuthenticated && <div className="container lg:w-11/12 sm:full mx-auto flex flex-wrap pt-4 pb-12">
                <SideBarUser />
                <div className="py-8 px-10">
                    <h1 className="text-2xl">Welcome {user.email}</h1>
                    <section class="bg-white py-8">
                         {
                             orders.length > 0 && <>
                                   <p> Total orders made : {orders.length}</p>
                             </>
                         }
                    </section>
                </div>
            </div>}
        </>
    )




}

export default UserDashboard;