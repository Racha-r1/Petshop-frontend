import React,{useState,useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getOrdersByUserEmail } from "../api/order";
import { getAddressesOfUserByEmail } from "../api/addresses";
import SideBarUser from "../components/SidebarUser";
import AddAddressModal from "../components/AddAddressModal";
import Address from "../components/Address";


const UserDashboard = () => {
    
    const { isAuthenticated, user } = useAuth0();
    const [orders, setOrders] = useState([]);
    const [addresses, setAddresses] = useState(undefined);
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (isAuthenticated) {
            getOrdersByUserEmail(user.email).then(data => {
                setOrders(data);
            });
            getAddressesOfUserByEmail(user.email).then(data => {
                console.log(data);
                setAddresses(data);
            });
        }
       
    },[user, isAuthenticated])


    return (

        <>
            { isAuthenticated && <div className="lg:w-11/12 sm:full mx-auto flex flex-wrap pt-4 pb-12">
                <SideBarUser />
                <AddAddressModal show={show} setShow={setShow}/>
                <div className="py-8 px-10">
                    <h1 className="text-2xl">Jouw gegevens </h1>
                    <section class="bg-white py-8 shadow-md rounded px-4 w-fit">
                        <p> Email: {user.email} </p>
                        <p> Klantennummer : {user.sub.split("|")[1]}</p>
                         {
                             orders.length > 0 && <>
                                   <p> Aantal bestellingen : {orders.length}</p>
                             </>
                         }
                    </section>
                    <h1 className="text-2xl mt-5"> Bezorggegevens </h1>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {
                            addresses && addresses.length > 0 && addresses.map(address => <Address address={address}/>)
                        }
                    </div>
                    <button  className="transition ease-in-out duration-300 px-3 py-2 bg-gray-800 text-white border-2 border-gray-800 hover:bg-white hover:text-gray-800" onClick={() => setShow(true)}>
                        Voeg een nieuw bezorgadres toe
                    </button>
                </div>
            </div>}
        </>
    )




}

export default UserDashboard;