import React from "react";
import { Link } from "react-router-dom";

const SideBarAdmin = () => {


    return (
        <div className="py-8 px-10">
            <ul className="flex flex-col gap-4">
                <li className={window.location.pathname === "/admin/products" ? "text-lg text-gray-900 pb-1 border-b-2 border-gray-800" : "transition ease-in-out duration-300 text-lg text-gray-900 hover:opacity-50"}>
                    <Link to="/admin/products"> Producten </Link>
                </li>
                <li className={window.location.pathname === "/admin/categories" ? "text-lg text-gray-900 pb-1 border-b-2 border-gray-800" : "transition ease-in-out duration-300 text-lg text-gray-900 hover:opacity-50"}>
                    <Link to="/admin/categories"> Categorieën </Link>
                </li>
                <li className={window.location.pathname === "/admin/pets" ? "text-lg text-gray-900 pb-1 border-b-2 border-gray-800" : "transition ease-in-out duration-300 text-lg text-gray-900 hover:opacity-50"}>
                    <Link to="/admin/pets"> Dieren </Link>
                </li>
            </ul>
        </div>
    )





}


export default SideBarAdmin;