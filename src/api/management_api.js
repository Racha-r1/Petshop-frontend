
async function getAccessToken(){
    var options = { method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(
            {"client_id": process.env.REACT_APP_AUTH0_MANAGEMENTAPI_CLIENTID,
             "client_secret": process.env.REACT_APP_AUTH0_MANAGEMENTAPI_CLIENTSECRET,
             "audience":"https://petshop.eu.auth0.com/api/v2/",
            "grant_type":"client_credentials"})
    };
    const data = await fetch("https://petshop.eu.auth0.com/oauth/token",options);
    const res = await data.json();
    return res;
}

export async function getUserRoles(id){
    const token = await getAccessToken();
    const response = await fetch(`https://petshop.eu.auth0.com/api/v2/users/${id}/roles`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token.access_token}`
        },
    });
    const data = await response.json();
    return data;
}
