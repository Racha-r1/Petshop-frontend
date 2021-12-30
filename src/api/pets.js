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