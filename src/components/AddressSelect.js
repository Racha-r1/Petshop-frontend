import React,{useState, useEffect} from "react"
import { useAuth0 } from "@auth0/auth0-react";
import { getAddressesOfUserByEmail } from "../api/addresses";

const AddressSelect = () => {

    const { isAuthenticated, user } = useAuth0();
    const [selected, setSelected] = useState(undefined);
    const [addresses, setAddresses] = useState([]);

    useEffect(() => {
        if (isAuthenticated) {
            getAddressesOfUserByEmail(user.email).then(data => {
                setAddresses(data);
            });
        }
    },[]);

    return (
        <div className="mt-4 flex flex-wrap gap-2">
            {
                addresses && addresses.length > 0 && addresses.map(address => {
                    return (
                        <div className={"flex flex-col gap-4 bg-white shadow-md rounded px-6 py-5 mb-10 w-72  " + ((selected === address.id) ? "border-4 border-indigo-500" : "")} onClick={() => setSelected(address.id)}>
                            <p> {address.straat} {address.nummer}</p>
                            <p> {address.postcode} {address.stad}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}



export default AddressSelect;