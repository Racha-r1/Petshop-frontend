export async function addOrderItem(orderItem,token){
    const response = await  fetch(`http://localhost:5000/api/items`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(orderItem)
    });
    const obj = await response.json();
    return obj;
}



export async function addOrder(order,token){
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