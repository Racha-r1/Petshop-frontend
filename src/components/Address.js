import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";


const Address = ({address}) => {

       return(<div className="flex flex-col gap-4 bg-white shadow-md rounded px-6 py-5 mb-10 w-96">
            <p> {address.straat} {address.nummer}</p>
            <p> {address.postcode} {address.stad}</p>
            <div className="flex justify-between">
                    <button  className="transition ease-in-out duration-300 px-3 py-2 bg-gray-800 text-white border-2 border-gray-800 hover:bg-white hover:text-gray-800">
                        Wijzig bezorgadres
                    </button>
                    <button className="transition ease-in-out duration-300 hover:opacity-50">
                        <FontAwesomeIcon icon={faTrashAlt}/>
                    </button>
            </div>
        </div>  
       )  


}

export default Address;