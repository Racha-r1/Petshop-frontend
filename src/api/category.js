
export async function getAllCategories(){
    const response = await  fetch("http://localhost:5000/api/categories", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
}