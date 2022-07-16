import { API } from "../../backend";


//category calls

export const createCategory = (userId, token, category) => {
    debugger
    return fetch(`${API}/category/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)

    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log("erroe")
        })
}


export const getAllCategories=()=>{
    return fetch(`${API}/categories`,{
        method:"Get",
    }).then(responce=>{
        return responce.json()
    })
    .catch(err=>console.error("dsf"))
}




//product calls

export const createProduct = (userId, token, product) => {
    return fetch(`${API}/product/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            // "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: product
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log("error"))
}


//get all products

export const getAllProducts=()=>{
    return fetch(`${API}/product`,{
        method:"GET",

    }).then(responce=>{
        return responce.json();
    })
    .catch(error=>console.error(error))
}


//delete products


export const deleteProduct = (productId,userId, token) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            // "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log("error"))
}




//get a product

export const getaProdct=productId=>{
    return fetch(`${API}/product/${productId}`,{
        method:"GET"
    }).then(responce=>{
        return responce.json();
    })
    .catch(error=>console.error(error))
}



//update a product


export const updateProduct = (productId,userId, token, product) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            // "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: product
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log("error"))
}

