
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


export async function deleteCategoryById(id, token){
    const response = await  fetch(`http://localhost:5000/api/categories/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    return response.status;
}