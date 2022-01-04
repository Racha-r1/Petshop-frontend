import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";
import { addAddress } from "../api/addresses";

const AddAddressModal = ({ show, setShow}) => {

    const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();

    const addAddressForUser = async() => {
        const straat = document.querySelector("#straat").value;
        const postcode = document.querySelector("#postcode").value;
        const nummer = document.querySelector("#nummer").value;
        const stad = document.querySelector("#stad").value;

        if (straat.length < 1 || postcode.length < 1 || nummer.length < 1 || stad.length < 1) {
            alert("Alle velden zijn verplicht");
        }
        else {
            if (isAuthenticated){
                const token = await getAccessTokenSilently();
                const address = {
                    straat: straat,
                    postcode: postcode,
                    nummer: nummer,
                    stad: stad,
                    user_email: user.email
                };
                addAddress(address, token).then(response => {
                    if (response === 200) {
                        window.location.reload();
                    }
                })
            }
        }
    }

    return (
         <div className={`fixed top-0 left-0 w-screen ${show ? 'block' : 'hidden'}  z-50 min-h-full overflow-auto`} style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
                        <div className="bg-white shadow-md rounded px-6 py-8 my-56 lg:mx-56 md:mx-22 sm:mx-10 xsm:mx-5 mx-auto justify-end relative">
                            <button onClick={() => setShow(false)} >
                               <FontAwesomeIcon icon={faTimes} className="text-gray-800 text-2xl cursor-pointer hover:opacity-50 transition ease-in-out duration-300 right-5 top-5 absolute" />
                            </button>
                            <div className="flex items-center gap-2 my-5">
                                <label htmlFor="straat" className="text-md w-20">Straat: </label>
                                <input type="text" id="straat" className="bg-white shadow-md rounded px-4 py-2 flex-1 md:flex-initial w-full" />
                            </div>
                            <div className="flex items-center gap-2 my-5">
                                <label htmlFor="nummer" className="text-md w-20">Nummer: </label>
                                <input type="number" id="nummer" className="bg-white shadow-md rounded px-4 py-2 flex-1 md:flex-initial w-full" />
                            </div>
                            <div className="flex items-center gap-2 my-5 ">
                                <label htmlFor="postcode" className="text-md w-20">Postcode: </label>
                                <input type="number" id="postcode" className="bg-white shadow-md rounded px-4 py-2 flex-1 md:flex-initial w-full" />
                            </div>
                            <div className="flex items-center gap-2 my-5">
                                <label htmlFor="stad" className="text-md w-20">Stad: </label>
                                <input type="text" id="stad"  className="bg-white shadow-md rounded px-4 py-2 flex-1 md:flex-initial w-full" />
                            </div>
                            <button  className="transition ease-in-out duration-300 px-3 py-2 bg-gray-800 text-white border-2 border-gray-800 hover:bg-white hover:text-gray-800" onClick={addAddressForUser}>
                                Voeg het bezorgadres toe
                            </button>
                        </div>

                    </div>
)


}

export default AddAddressModal;