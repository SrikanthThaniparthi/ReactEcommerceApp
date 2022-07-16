import { API } from "../../backend"


export const getProducts=()=>{

    return fetch(`${API}\product`)
    .then(data=>{
        if(data.error){

        }
        else{
            return data.json()
        }
    })
}