export async function getAllPets(){
    const response = await  fetch("http://localhost:5000/api/pets", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
}


export async function deletePetById(id, token){
    const response = await  fetch(`http://localhost:5000/api/pets/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    return response.status;
}