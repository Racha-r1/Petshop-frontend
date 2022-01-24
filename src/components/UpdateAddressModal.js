import React,{useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";
import { updateAddressById, getAddressById } from "../api/addresses";

const UpdateAddressModal = ({ updateShow, setUpdateShow, id}) => {

    const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
    const [address, setAddress] = useState(undefined);
    const [straat, setStraat] = useState(undefined);
    const [nummer, setNummer] = useState(undefined);
    const [postcode, setPostcode] = useState(undefined);
    const [stad, setStad] = useState(undefined);

    const updateAddress = async() => {
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
                updateAddressById(id, token, address).then(response => {
                    if (response === 200) {
                        window.location.reload();
                    }
                })
            }
        }
    }

    useEffect(() => {
       getAddressById(id).then(response => {
            setAddress(response);
            setStraat(response.straat);
            setNummer(response.nummer);
            setPostcode(response.postcode);
            setStad(response.stad);
        });
    },[id]);

    return (
         <div className={`fixed top-0 left-0 w-screen ${updateShow ? 'block' : 'hidden'}  z-50 min-h-full overflow-auto`} style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>      
                        {
                            address && <div className="bg-white shadow-md rounded px-6 py-8 my-56 lg:mx-56 md:mx-22 sm:mx-10 xsm:mx-5 mx-auto justify-end relative">
                            <button onClick={() => setUpdateShow(false)} >
                               <FontAwesomeIcon icon={faTimes} className="text-gray-800 text-2xl cursor-pointer hover:opacity-50 transition ease-in-out duration-300 right-5 top-5 absolute" />
                            </button>
                            <div className="flex items-center gap-2 my-5">
                                <label htmlFor="straat" className="text-md w-20">Straat: </label>
                                <input type="text" id="straat" value={straat} onChange={(e) => setStraat(e.target.value)} className="bg-white shadow-md rounded px-4 py-2 flex-1 md:flex-initial w-full" />
                            </div>
                            <div className="flex items-center gap-2 my-5">
                                <label htmlFor="nummer" className="text-md w-20">Nummer: </label>
                                <input type="number" id="nummer" value={nummer} onChange={(e) => setNummer(e.target.value)}  className="bg-white shadow-md rounded px-4 py-2 flex-1 md:flex-initial w-full" />
                            </div>
                            <div className="flex items-center gap-2 my-5 ">
                                <label htmlFor="postcode" className="text-md w-20">Postcode: </label>
                                <input type="number" id="postcode" value={postcode} onChange={(e) => setPostcode(e.target.value)}  className="bg-white shadow-md rounded px-4 py-2 flex-1 md:flex-initial w-full" />
                            </div>
                            <div className="flex items-center gap-2 my-5">
                                <label htmlFor="stad" className="text-md w-20">Stad: </label>
                                <input type="text" id="stad" value={stad} onChange={(e) => setStad(e.target.value)} className="bg-white shadow-md rounded px-4 py-2 flex-1 md:flex-initial w-full" />
                            </div>
                            <button  className="transition ease-in-out duration-300 px-3 py-2 bg-gray-800 text-white border-2 border-gray-800 hover:bg-white hover:text-gray-800" onClick={updateAddress}>
                                Verander het bezorgadres
                            </button>
                        </div>
                        }
                    </div>
)


}

export default UpdateAddressModal;