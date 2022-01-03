import React from "react";
import { Link } from "react-router-dom";

const SideBarUser = () => {

    const route = window.location.pathname.split("/");
    return (
        <div className="py-8 px-10">
            <ul className="flex flex-col gap-4">
                <li className={`/${route[1]}/${route[2]}` === "/user/dashboard" ? "text-lg text-gray-900 pb-1 border-b-2 border-gray-800" : "transition ease-in-out duration-300 text-lg text-gray-900 hover:opacity-50"}>
                    <Link to="/user/dashboard"> Dashboard </Link>
                </li>
                <li className={`/${route[1]}/${route[2]}`=== "/user/orders" ? "text-lg text-gray-900 pb-1 border-b-2 border-gray-800" : "transition ease-in-out duration-300 text-lg text-gray-900 hover:opacity-50"}>
                    <Link to="/user/orders"> Bestellingen </Link>
                </li>
            </ul>
        </div>
    )

}


export default SideBarUser;