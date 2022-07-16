import { API } from "../../backend"




export const createOrder = (userId, token, orderData) => {

    return fetch(`${API} / order / create / ${userId}`, {
        method: "POST",
        Headers: {
            Accept: "application/json",
            "content-type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringyfy({ order: orderData })
    })
        .then(responce => {
            return responce.json()
        })
          .catch(err=>console.log(err));
  


}



