export async function getAddressesOfUserByEmail(user_email){
    const response = await  fetch(`http://localhost:5000/api/addresses?user_email=${user_email}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    console.log(data);
    return data;
}


export async function addAddress(address, token){
    const response = await  fetch("http://localhost:5000/api/addresses", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(address)
    });
    return response.status;
}