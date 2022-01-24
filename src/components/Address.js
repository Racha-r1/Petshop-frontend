import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { deleteAddressById } from "../api/addresses";
import { useAuth0 } from "@auth0/auth0-react";

const Address = ({address, setUpdateShow, setId}) => {

       const {getAccessTokenSilently} = useAuth0();

       const deleteAddress = () => {
            getAccessTokenSilently().then(token => {
                deleteAddressById(address.id,token).then(response => {
                        if (response === 200) {
                            window.location.reload();
                        }
                });
            });
       }

       return(<div className="flex flex-col gap-4 bg-white shadow-md rounded px-6 py-5 mb-10 w-96">
            <p> {address.straat} {address.nummer}</p>
            <p> {address.postcode} {address.stad}</p>
            <div className="flex justify-between">
                    <button  className="transition ease-in-out duration-300 px-3 py-2 bg-gray-800 text-white border-2 border-gray-800 hover:bg-white hover:text-gray-800" onClick={() => {setUpdateShow(true);setId(address.id);}}>
                        Wijzig bezorgadres
                    </button>
                    <button className="transition ease-in-out duration-300 hover:opacity-50" onClick={deleteAddress}>
                        <FontAwesomeIcon icon={faTrashAlt}/>
                    </button>
            </div>
        </div>  
       )  


}

export default Address;