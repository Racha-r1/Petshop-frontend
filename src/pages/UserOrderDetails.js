import React,{useState, useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getOrderById } from "../api/order";
import SideBarUser from "../components/SidebarUser";
import { useParams } from "react-router-dom";

const UserOrderDetails = () => {
    
    const { isAuthenticated } = useAuth0();
    const [order, setOrder] = useState(undefined);
    const {id} = useParams();

    useEffect(() => {
        getOrderById(id).then(data => {
            setOrder(data);
        });
    },[]);

    return (

        <>
            { isAuthenticated &&  <div className="container lg:w-11/12 sm:full mx-auto flex flex-wrap pt-4 pb-12">
                <SideBarUser />
                <div className="py-8 px-10">
                    {  order && <>
                        <h1 className="text-2xl">Bestelling Nr.{order.id} </h1>
                        <section class="bg-white py-8">
                            <div className="bg-white shadow-md rounded gap-10 px-4 py-6 flex flex-col flex-wrap mt-5">
                            {
                                order.items.map(item => {
                                    return <div className="flex gap-4 flex-1">
                                        <img src={item.product.image} alt="foto" className="w-28" />
                                            <div className="flex gap-2 flex-col">
                                                <p className="text-md"> {item.product.name} </p>
                                                <p className="text-sm"> {"Aantal: " + item.quantity}</p>
                                                <p className="text-sm"> {`€ ${parseFloat(item.product.price).toFixed(2)}`}</p>
                                            </div>
                                        </div>
                                })
                            }

                            </div>
                        </section>
                        </>
                    }
                </div>
            </div>}
        </>
    )

}

export default UserOrderDetails;