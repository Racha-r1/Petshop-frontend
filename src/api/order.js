export async function addOrder(order,token){
    console.log(order);
    const response = await  fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(order)
    });
    return response.status;
}

export async function getOrdersByUserEmail(email){
    const response = await  fetch(`http://localhost:5000/api/orders?user_email=${email}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
}


export async function getOrderById(id){
    const response = await  fetch(`http://localhost:5000/api/orders/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
}