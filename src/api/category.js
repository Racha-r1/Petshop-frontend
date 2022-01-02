
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

export async function getCategoryById(id){
    const response = await  fetch(`http://localhost:5000/api/categories/${id}`, {
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


export async function updateCategoryById(id,category,token){
    const response = await  fetch(`http://localhost:5000/api/categories/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(category)
    });
    const obj = await response.json();
    console.log(obj);
    return response.status;
}


export async function addCategory(category, token){
    const response = await  fetch("http://localhost:5000/api/categories", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(category)
    });
    return response.status;
}