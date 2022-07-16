import { API } from "../../backend";


export const getToken = (userId, token) => {
    debugger
    return fetch(`${API}/payment/gettoken/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    }).then(response => {
        debugger
        return response.json();
    }).catch(err => console.log("error"))
}


export const processPayment = (userId, token, paymentInfo) => {
    debugger
    return fetch(`${API}/payment/braintree/${userId}`
        , {
            method: "POST",
            headers: {
                Accept: "application/json",
                "content-type": "application/json",
                Authorization: `bearer ${token}`
            },
            body: JSON.stringify(paymentInfo)
        }).then(response => {
            return response.json();
        })
}