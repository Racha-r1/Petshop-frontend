

export async function getAllProducts(){
    const response = await  fetch("http://localhost:5000/api/products", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
}

export async function getProductById(id){
    const response = await  fetch(`http://localhost:5000/api/products/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
}


export async function deleteProductById(id, token){
    const response = await  fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    return response.status;
}