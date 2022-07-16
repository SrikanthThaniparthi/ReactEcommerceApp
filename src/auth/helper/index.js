import { API } from "../../backend"

//api means : url

export const signup = user => {
    return fetch(`${API}/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(
            Response => {
                return Response.json();
            }
        )
        .catch(err => {
            console.log(err);
        })

}

export const signin = user => {
    return fetch(`${API}/signin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(
            Response => {
                return Response.json();
            }
        )
        .catch(err => {
            console.log(err);
        })

}

export const authenticate = (data, next) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(data))
        next()
    }
}


export const Signout = next => {
    if (typeof window !== "undefined") {
        localStorage.removeItem('jwt');
        next()
        return fetch(`${API}/signout`, {
            method: "GET",

        })
            .then(Response => {
                console.log("Signout Success")
                window.location.reload()
            })
            .catch(err => console.log(err))

    }

}


export const isAuthenicated = () => {
    if (typeof window == "undefined") {
        debugger
        return false;
    }
    if (localStorage.getItem('jwt')) {
        debugger
        return JSON.parse(localStorage.getItem("jwt"));

    }
    else {
        return false;
    }
}